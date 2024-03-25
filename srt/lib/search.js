'use server';

import YouTube from "youtube-sr";

export const search = async (query) => {
    const results = await YouTube.search(`${query} `, { limit: 10 });
    return results;
    };
