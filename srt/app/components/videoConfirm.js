'use client';

import Link from 'next/link';
import { useState } from 'react';
import useVideo from './useVideo';
import sendSongToQueue from './sendQueue';

export default function VideoConfirm({ id }) {
    const {data, loading, error} = useVideo(id);
    
    const handleConfirm = async () => {
        const res = await sendSongToQueue(data.id);
        if(res.message !== "success"){
            alert("Error: " + res.message);
        }
    }

    
    if(loading) return <p className="flex justify-center items-center min-h-screen">Loading...</p>;
    if(error) return <p className="flex justify-center items-center min-h-screen">Error: {error.message}</p>;

    if(data){
        return (
            <div className="flex flex-col justify-start items-center pt-4 md:pt-10">
                <h1 className="text-xl md:text-3xl text-center mt-4 pb-2 px-4">{data.title}</h1>
                <p className="px-3 py-1 mb-0">Duration: {data.duration_formatted}</p>
                <img src={data.thumbnail.url} alt={data.title} className="max-w-full h-auto my-4 px-4"/>
                <button onClick={handleConfirm} className="bg-black hover:bg-green-500 text-white py-2 px-4 rounded border border-white mt-1">
                    Confirm Request
                </button>
                <Link href="/">
                    <button className="bg-black hover:bg-red-500 text-white py-1 px-3 rounded border border-white mt-3">Back</button>
                </Link>
            </div>
        );
    }
}
