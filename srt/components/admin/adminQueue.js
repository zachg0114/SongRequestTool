"use client";

import {Checkbox, CheckboxGroup, Button, Spinner, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu} from "@nextui-org/react";

import {useState, useEffect} from 'react';
import Link from 'next/link';

import useQueue from '../util/useQueue';
import delQueue from '../util/delQueue';
import sendNotif from "../util/sendNotif";

import getDownload from './getDownload';

export default function AdminQueue() {
    const {queue, isLoading, error, mutate} = useQueue();
    //store the queue in a state
    const [queueState, setQueueState] = useState(['NOTHING']);

useEffect(() => {
    setInterval(() => {
        mutate();
    }, 10000);
}, []);



useEffect(() => {
        if (queue) {
            if (queue.collection.length > queueState.length - 1) {
                if(queueState[0] == 'NOTHING'){
                    setQueueState(queue.collection);
                    return;
                }
                sendNotif(queue.collection[queue.collection.length - 1]);
                setQueueState(queue.collection);
            }
            else if (queue.collection.length < queueState.length) {
                setQueueState(queue.collection);
            }
        }
    }, [queue]);
    
    const [selectedSongs, setSelectedSongs] = useState([]);

    const handleDelete = async (songId) => {
        await delQueue(songId);
        mutate();
    };

    
    if(queue){
        //
    }

    const handleDeleteAndDownload = async (songId) => {
        await delQueue(songId);
        mutate();
        getDownload(songId);
    };

    const handleSelectDeselectAll = () => {
        if (selectedSongs.length === queue?.collection?.length) {
            setSelectedSongs([]); // Deselect all
        } else {
            setSelectedSongs(queue?.collection.map(song => song.id)); // Select all
        }
    };

    const handleAcceptSelectedSongs = async () => {
        if (selectedSongs.length > 0) {
            await Promise.all(selectedSongs.map(async (songId) => {
                getDownload(songId);
                await delQueue(songId);
            }));
            mutate();
        }
    };

    const handleDeleteSelectedSongs = async () => {
        if (selectedSongs.length > 0) {
            await Promise.all(selectedSongs.map(async (songId) => {
                await delQueue(songId);
            }));
            mutate();
        }
    };
    

    return (
        <section>
            <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-xl font-bold text-gray-300 mb-4">Admin Page</h1>
                <Dropdown aria-label="dropdown">
                <DropdownTrigger>
                    <Button>Actions</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="dropdownMenu" className="text-center" disabledKeys={selectedSongs.length ? null : ['acceptSelected', 'rejectSelected']}>
                    <DropdownItem key="acceptSelected" onClick={handleAcceptSelectedSongs} className="flex justify-center">Accept Selected Songs</DropdownItem>
                    <DropdownItem key="rejectSelected" onClick={handleDeleteSelectedSongs} className="flex justify-center text-danger" color="danger">Reject Selected Songs</DropdownItem>
                </DropdownMenu>
                </Dropdown>                
                <Link href="/">
                    <Button variant="shadow" className="text-white bg-purple-600 hover:bg-purple-600 font-bold py-1 px-2 md:py-2 md:px-4 rounded transition duration-200 ease-in-out border border-white text-xs md:text-base">
                        Home
                    </Button>
                </Link>
            </div>
            <div>
                <Button color="secondary" variant="shadow" onClick={handleSelectDeselectAll}>
                    Select/Deselect All
                </Button>
            </div>
            <div className="space-y-2 mt-4">
                {isLoading && 
                    <div className="flex justify-center items-center w-full mt-20">
                    <Spinner color="secondary"/>
                    </div>
                }
                    <CheckboxGroup value={selectedSongs} onChange={setSelectedSongs}>
                        {queue?.collection?.map((song, index) => (
                                <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                                    <Checkbox value={song.id} size="lg" color="secondary">
                                        <div className="pl-2">
                                            <p className="text-base md:text-lg font-semibold text-white">{song.data.songName}</p>
                                            <p className="text-xs md:text-sm text-gray-400">{song.data.songFormattedDuration}</p>
                                        </div>
                                    </Checkbox>
                                    <div className="flex space-x-2">
                                        <Button onClick={() => { handleDeleteAndDownload(song.id) }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 text-xs rounded transition duration-200 ease-in-out md:py-2 md:px-4 md:text-base">Accept</Button>                                    
                                        <Button onClick={() => handleDelete(song.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 text-xs rounded transition duration-200 ease-in-out md:py-2 md:px-4 md:text-base">Reject</Button>
                                    </div>
                                </div>
                        ))}
                    </CheckboxGroup>
            </div>
        </section>
    );
}
