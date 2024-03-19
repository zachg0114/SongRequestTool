import { NextResponse } from "next/server";
import getQueue from "@/lib/mongo/getQueue";
export async function GET(req) {
    const queue = await getQueue();
    return NextResponse.json(queue);
}