import { NextResponse } from "next/server";
import getVideo from "@/lib/getVideo";

export async function GET(request, {params}){
   try{
        const id = params.id
        if(!id) return NextResponse.error("Query is required");
        const result = await getVideo(`https://www.youtube.com/watch?v=${id}`);
        return NextResponse.json(result);
   }
   catch(e){
        console.log(e)
        return NextResponse.error(e);
   }
}