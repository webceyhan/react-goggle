import { createContext, useContext, useState } from 'react';
import { fetchApi } from './api';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchResults = async (query, type = 'search') => {
        // skip if query is empty
        if (query === '') return setResults([]);

        setLoading(true);
        setResults(await fetchApi(query, type));
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
