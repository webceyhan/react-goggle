import { createContext, useContext, useState } from 'react';
import { responses } from './sample';

const ResultContext = createContext();

const DEV = process.env.NODE_ENV === 'development';
const apiUrl = 'https://google-search3.p.rapidapi.com/api/v1';

const responseTypeMap = {
    search: 'results',
    image: 'image_results',
    news: 'entries',
    video: 'results',
};

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // type: 'search' | 'images' | 'news' | 'videos'
    const fetchResults = async (query, type = 'search') => {
        // skip if query is empty
        if (query === '') return setResults([]);

        setLoading(true);

        let data = {};

        if (DEV) {
            data = responses[type];
        } else {
            const response = await fetch(
                `${apiUrl}/${type}/q=${encodeURIComponent(query)}`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    },
                }
            );

            data = await response.json();
        }

        setResults(data[responseTypeMap[type]] ?? []);
        setLoading(false);
    };

    return (
        <ResultContext.Provider
            value={{
                results,
                loading,
                searchTerm,
                setSearchTerm,
                fetchResults,
            }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
