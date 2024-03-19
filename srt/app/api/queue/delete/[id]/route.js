import {NextResponse} from 'next/server';
import deleteQueue from '@/lib/mongo/deleteQueue';

export async function GET(request, {params}){
    try{
    const {id} = params;
    const res = await deleteQueue(id);
    return NextResponse.json(
        {body: res, status: 200, statusText: `deleted ${id}`}
    )
    }catch(e){
        console.log(e);
        return NextResponse.json(
            {body: e, status: 500, statusText: `error`}
        )
    }
}