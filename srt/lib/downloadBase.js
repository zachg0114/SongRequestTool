'use server';
import { getVideoMP3Binary } from "yt-get";

export default async function downloadBase(id) {
    const result = await getVideoMP3Binary(`https://www.youtube.com/watch?v=${id}`);
    const base64 = Buffer.from(result.mp3).toString('base64');
    
    return {
        title: result.title,
        mp3: base64, // Now mp3 is a Base64 string
    };
}