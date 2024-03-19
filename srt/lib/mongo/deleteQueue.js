import clientPromise from './databaseConnect';

export default async function deleteQueue(queueId) {
    const client = await clientPromise;
    const db = client.db('dj_song_request');
    const collection = db.collection('songQueue');
    const result = await collection.deleteOne({ id: queueId });
    return result;
}