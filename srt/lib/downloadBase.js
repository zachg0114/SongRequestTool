"use server";
import ytdl from "@distube/ytdl-core";
import ffmpeg from "fluent-ffmpeg";
import { PassThrough } from "stream";

async function downloadYouTubeVideo(videoInfo) {
  return new Promise((resolve, reject) => {
    // Create the YouTube video URL from the video ID
    // Create a stream for the audio
    const audioStream = ytdl.downloadFromInfo(videoInfo, {
      quality: "highestaudio",
    });

    // Use ffmpeg to convert and save audio to the specified output file
    // Use PassThrough stream to capture ffmpeg output
    const passThrough = new PassThrough();
    let chunks = [];

    // Set up ffmpeg to process the audio stream
    ffmpeg(audioStream)
      .toFormat("mp3") // Set format to MP3 or AAC as needed
      .pipe(passThrough) // Pipe ffmpeg output to PassThrough
      .on("error", (error) => {
        console.error("Error processing audio:", error);
        reject(error);
      });

    // Collect data chunks as they come in
    passThrough.on("data", (chunk) => chunks.push(chunk));

    // On end, combine chunks and convert to base64
    passThrough.on("end", () => {
      const audioBuffer = Buffer.concat(chunks);
      const audioBase64 = audioBuffer.toString("base64");
      resolve(audioBase64);
    });
  });
}

export default async function downloadBase(id) {
  const info = await ytdl.getInfo(id);

  return {
    title: info.videoDetails.title,
    mp3: await downloadYouTubeVideo(info), // Now mp3 is a Base64 string
  };
}

