import { agent } from "@/lib/proxy";
import { getInfo } from "@distube/ytdl-core";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    if (!id) return NextResponse.error("Query is required");
    const result = await getInfo(`https://www.youtube.com/watch?v=${id}`, {
      agent,
    });
    return NextResponse.json(result.videoDetails);
  } catch (e) {
    console.log(e);
    return NextResponse.error(e);
  }
}

