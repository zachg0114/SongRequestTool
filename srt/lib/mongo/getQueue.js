'use server';

import clientPromise from "./databaseConnect";

export default async function getQueue() {
    const client = await clientPromise;
    const collection = await client.db("dj_song_request").collection("songQueue").find({}).toArray();
    collection.forEach((element) => {
        element._id = element._id.toString();
    });
    return {
        collection
    }
    
}