import * as yt from 'youtube-search-without-api-key';

export const search = async (query) => {
    const results = await yt.search(query);
    return results;
    };
