// sendQueue.js
async function sendSongToQueue(videoDetails) {
    if (!videoDetails || !videoDetails.videoId) {
      throw new Error("Video details or ID is missing");
    }
  
    const res = await fetch(`/api/queue/${videoDetails.videoId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(videoDetails),
    });
    return res;
  }
  
  export default sendSongToQueue;
  