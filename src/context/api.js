import { sampleResponses } from './sample';

const IS_DEV = process.env.NODE_ENV === 'development';
const API_URL = 'https://google-search3.p.rapidapi.com/api/v1';
const HEADERS = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
};

const normalizeData = (data, type) => {
    // possible types:
    // 'search' | 'image' | 'video' | 'news'
    if (type === 'image') return data?.image_results ?? [];
    if (type === 'video') return data?.results ?? [];
    if (type === 'news') return data?.entries ?? [];
    return data?.results ?? []; // default to search
};

export const fetchApi = async (query, type) => {
    // define raw response data
    let data = {};

    if (IS_DEV) {
        // use sample data if DEV
        data = sampleResponses[type];
    } else {
        // fetch data from API
        const url = `${API_URL}/${type}/q=${encodeURIComponent(query)}`;
        const response = await fetch(url, { method: 'GET', headers: HEADERS });
        data = await response.json();
    }

    return normalizeData(data, type);
};
