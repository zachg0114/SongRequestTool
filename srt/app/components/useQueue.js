"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function useQueue() {
    const { data, error, isLoading, mutate } = useSWR("/api/queue", fetcher, { refreshInterval: 10000 });

    return {
        queue: data,
        isLoading: isLoading,
        error: error,
        mutate, 
    };
}