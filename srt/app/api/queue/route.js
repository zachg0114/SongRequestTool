import { NextResponse } from "next/server";
import getQueue from "@/lib/mongo/getQueue";

export async function POST(req, res) {
    const queue = await getQueue();

    console.log(queue);
    return NextResponse.json(queue);
}