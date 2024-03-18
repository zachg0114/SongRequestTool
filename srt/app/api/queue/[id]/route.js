import { NextResponse } from "next/server";
import addSongToQueue from "@/lib/mongo/addSongToQueue";

export async function GET(request, {params}){
    try{
        const id = params.id
        const song = await addSongToQueue(id)
        return NextResponse.json({
            message: "success"
          }, {
            status: 200,
          })
    } catch(e){
        console.log(e)
        return NextResponse.error(new Error("Error adding song to queue"))
    }
}