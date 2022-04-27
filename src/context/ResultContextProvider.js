import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const apiUrl = 'https://google-search3.p.rapidapi.com/api/v1';
const apiKey = '65b9727b4cmshb9aaaffc5e204e3p16c0a1jsn32d97d4f188e';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('js mastery');

    // type: 'search' | 'images' | 'news' | 'videos'
    const fetchResults = async (query, type = 'search') => {
        setLoading(true);

        const response = await fetch(`${apiUrl}/${type}/q=${query}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
            },
        });

        const data = await response.json();

        setResults(type === 'image' ? data.image_results :  data.results);
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
