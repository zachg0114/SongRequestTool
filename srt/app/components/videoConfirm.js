'use client';

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';

import useVideo from './useVideo';

export default function VideoConfirm({ id }) {
    const {data, loading, error} = useVideo(id);
    
    if(loading) return <p className="flex justify-center items-center h-screen">Loading...</p>;
    if(error) return <p className="flex justify-center items-center h-screen">Error: {error.message}</p>;

    if(data){
        console.log(data)
        // Truncate the description to 200 characters
        const truncatedDescription = data.description.length > 200 ? `${data.description.slice(0, 200)}...` : data.description;

        return (
            <div className="flex flex-col justify-start items-center h-screen pt-10 md:pt-20">
                <h1 className="text-xl md:text-3xl text-center pb-2 px-4">{data.title}</h1>
                <p className="px-3 py-1 mb-2">{data.duration_formatted}</p>
                <p className="text-sm md:text-base text-center px-4">{truncatedDescription}</p>
                <img src={data.thumbnail.url} alt={data.title} className="max-w-full h-auto my-4 px-4"/>
                <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border border-white">
                    Confirm Request
                </button>
            </div>
        );
    }
    console.log(data)
}
