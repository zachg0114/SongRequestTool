import clientPromise from "./databaseConnect";

export default async function addSongToQueue(song) {
    const client = await clientPromise;
    const collection = await client.db("dj_song_request").collection("songQueue");
    const result = await collection.insertOne(song);
}