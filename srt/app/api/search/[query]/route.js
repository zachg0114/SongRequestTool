import { NextResponse } from "next/server";
import { search } from "@/lib/search";

export async function GET(request, {params}){
     try{
        const query = params.query
        const result = await search(query);
        return NextResponse.json(result);
   }
   catch(e){
        console.log(e)
        return NextResponse.error(e);
   }
}