import { NextResponse } from "next/server";
import { search } from "@/lib/search";

export async function POST(request){
   try{
        const { query } = await request.json();
        const result = await search(query);
        return NextResponse.json(result);
   }
   catch(e){
        console.log(e)
        return NextResponse.error(e);
   }
}