import clientPromise from "./databaseConnect";

export default async function checkUser(email) {
    const client = await clientPromise;
    const dbCollection = await client.db("dj_song_request").collection("djadmin").find({}).toArray();
    const djAdminUsers = dbCollection[0];
    if(djAdminUsers.emails.includes(email)) {
        return true
    }
    return false
}