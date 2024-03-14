import YouTube from "youtube-sr";

export default async function getVideo(videoURL) {
    const video = await YouTube.getVideo(videoURL).catch((err) => {
        console.error(err);
    });
    return video;
}