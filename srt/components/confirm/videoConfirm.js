'use client';

import Link from 'next/link';
import { useState } from 'react';
import useVideo from '../util/useVideo'
import sendSongToQueue from '../util/sendQueue';
import { useRouter } from 'next/navigation';
import {Button, Spinner} from "@nextui-org/react";

import addNotification from 'react-push-notification';

export default function VideoConfirm({ id }) {
    const {data, isLoading, error} = useVideo(id);
    const router = useRouter();
    const handleConfirm = async () => {
        const res = await sendSongToQueue(data);
        if(res.status != 200){
            addNotification({
                title: 'Error',
                subtitle: `There was an error adding ${data.title} to the queue!`,
                message: res.statusText,
                theme: 'red',
            });
        }
        else{
            addNotification({
                title: 'Success',
                message: `${data.title} has been added to the queue!`,
                theme: 'black',
            });
            router.push('/')
        }
    }

    if(error) return <p className="flex justify-center items-center min-h-screen">Error: {error}</p>;

        return (
            <div className="flex flex-col justify-start items-center pt-4 md:pt-10">
                    {isLoading && <Spinner size="lg" color="secondary"/>}
                    {!isLoading && <>
                    <h1 className="text-xl md:text-3xl text-center mt-4 pb-2 px-4">{data?.title}</h1>
                    <p className="px-3 py-1 mb-0">Duration: {data?.duration_formatted}</p>
                {/* Add a style prop to control the max-width and max-height of the thumbnail */}
                    <img 
                        src={`${data?.thumbnail.url}`}
                        alt={data?.title} 
                        className="my-4 px-4" 
                        style={{ maxWidth: '400px', maxHeight: '250px' }} // Set maximum dimensions here
                    />
                <Button onClick={handleConfirm} className="bg-black hover:bg-green-500 text-white py-2 px-4 rounded border border-white mt-1">
                    Confirm Request
                </Button>
                <Link href="/">
                    <Button className="bg-black hover:bg-red-500 text-white py-1 px-3 rounded border border-white mt-3">Back</Button>
                </Link>
                </>
                    }
            </div>
        );
    
}
