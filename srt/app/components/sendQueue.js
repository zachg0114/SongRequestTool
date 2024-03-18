
async function sendSongToQueue(id){
    const res = await fetch(`/api/queue/${id}`)
    const data = await res.json();
    return data;
}

export default sendSongToQueue;