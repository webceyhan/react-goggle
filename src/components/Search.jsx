import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../context/ResultContextProvider';
import { Links } from './Links';

/**
 *  <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
 */
export const Search = () => {
    const [term, setTerm] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debouncedTerm] = useDebounce(term, 300);

    useEffect(() => {
        if (debouncedTerm) setSearchTerm(debouncedTerm);
        else if (!debouncedTerm) setSearchTerm('');
    }, [debouncedTerm, setSearchTerm, term]);

    return (
        <div className="relative px-5">
            <input
                type="text"
                value={term}
                className="sm:w-96 w-100 h-10 bg-slate-200 border rounded-full shadow-sm outline-none p-5 text-black hover:shadow-lg"
                placeholder="search Goggle..."
                onChange={(e) => setTerm(e.target.value)}
            />
            {term.length > 0 && (
                <button
                    type="button"
                    className="absolute top-0.5 right-9 text-2xl text-gray-500"
                    onClick={() => setTerm('')}
                >
                    x
                </button>
            )}
            <Links />
        </div>
    );
};
