async function sendSongToQueue(data){
    const res = await fetch(`/api/queue/${data.id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((err) => {
        console.log(err);
        return null;
    })
    return res;
}

export default sendSongToQueue;