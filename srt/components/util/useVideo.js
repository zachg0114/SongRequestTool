'use client';

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function useVideo(videoId) {
  const { data, isLoading, error } = useSWR(`/api/video/${videoId}`, fetcher);
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
}