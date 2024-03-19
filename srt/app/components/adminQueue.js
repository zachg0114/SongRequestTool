'use client';

import Link from 'next/link';
import useQueue from './useQueue';
import delQueue from './delQueue';
export default function AdminQueue() {
    const {queue, isLoading, error, mutate} = useQueue();

    const handleDelete = async (songId) => {
        await delQueue(songId); // Ensure delQueue is async or returns a promise
        mutate(); // Revalidate / refetch the queue data
    };

  return (
    <section>
        <div className="flex justify-between items-center">
                        <h1 className="text-xl md:text-xl font-bold text-gray-300 mb-4">Admin Page</h1>
                        <Link href="/">
                            <button className="text-white bg-black hover:bg-blue-700 font-bold py-1 px-2 md:py-2 md:px-4 rounded transition duration-200 ease-in-out border border-white text-xs md:text-base">
                                Home
                            </button>
                        </Link>
                    </div>
                    <div className="space-y-2 mt-4">
                        {queue?.collection?.map((song, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                                <div>
                                    <p className="text-base md:text-lg font-semibold text-white">{song.data.songName}</p>
                                    <p className="text-xs md:text-sm text-gray-400">{song.data.songFormattedDuration}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Link href={`https://apiyoutube.cc/320/${song.id.split("").reverse().join('')}::4e91cc6225ee3f2c380919e39b5a44f2::1710828856::no::su`}>
                                        <button onClick={() => handleDelete(song.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 text-xs rounded transition duration-200 ease-in-out md:py-2 md:px-4 md:text-base">Accept</button>                                    </Link>
                                        <button onClick={() => handleDelete(song.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 text-xs rounded transition duration-200 ease-in-out md:py-2 md:px-4 md:text-base">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
    </section>
  );
}