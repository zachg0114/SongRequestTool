import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getVideoMP3Binary } from "yt-get";

export async function GET(req, {params}) {
  const { id } = params;
  const key = req.headers.get('authorization');

  if (!key || key !== process.env.NEXT_PUBLIC_APIKEY) {
      return res.status(401).json({ error: "Unauthorized" });
  }

  const video = await getVideoMP3Binary(`https://www.youtube.com/watch?v=${id}`);
  const res = NextResponse.next();
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Content-Disposition', `attachment; filename="${video.title}.mp3"`);
  res.send(video.mp3);
}