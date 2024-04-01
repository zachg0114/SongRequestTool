import clientPromise from "./databaseConnect";

export default async function addSongToQueue(id, song) {
    const client = await clientPromise;
    const collection = await client.db("dj_song_request").collection("songQueue");
    const check = await collection.findOne({id: id});
    if(check){
        return null;
    }
    const result = await collection.insertOne({
        id: id,
        data: song
    });
    return result;
}