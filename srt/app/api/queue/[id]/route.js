import { NextResponse } from "next/server";
import addSongToQueue from "@/lib/mongo/addSongToQueue";
export async function POST(request, { params }) {
  try {
    const id = params.id;
    const body = await request.json();
    const data = {
      songID: body.id,
      songName: body.title,
      songURL: body.url,
      songDuration: body.duration,
      songFormattedDuration: body.duration_formatted,
    };
    if (data.songDuration > 60 * 10 * 1000) {
      return NextResponse.json(
        {
          message: "Song is too long. Max length is 10 minutes.",
        },
        {
          status: 400,
          statusText: "Song is too long. Max length is 10 minutes.",
        }
      );
    }
    await addSongToQueue(id, data);
    return NextResponse.json(
      {
        message: "success",
        data: data,
      },
      {
        status: 200,
        statusText: "success",
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: "Error: " + e,
      },
      {
        status: 500,
        statusText: "Error: " + e,
      }
    );
  }
}
