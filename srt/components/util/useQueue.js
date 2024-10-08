"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import getQueue from "@/lib/mongo/getQueue";

export default function useQueue() {
    const { data, error, isLoading, mutate } = useSWR("/api/queue", () => getQueue() );

    return {
        queue: data,
        isLoading: isLoading,
        error: error,
        mutate, 
    };
}