import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const location = useLocation();
    const { results, loading, searchTerm, fetchResults } = useResultContext();

    useEffect(() => {
        fetchResults(searchTerm, location.pathname.slice(1));
        // bugfix:
        // Line 14:8:  React Hook useEffect has a missing dependency: 'fetchResults'.
        // Either include it or remove the dependency array  react - hooks / exhaustive - deps
        // eslint-disable-next-line
    }, [searchTerm, location.pathname]);

    if (loading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap">
                    {results.map(({ link, title }, index) => (
                        <div className="md:w-3/5 w-full sm:p-3 p-4" key={index}>
                            <a href={link} target="_blank" rel="noreferrer">
                                {/* 
                                    bugfix: 
                                    react-dom.development.js:14757 Uncaught Error: Objects are not valid 
                                    as a React child (found: object with keys {domain, href, title}). 
                                    If you meant to render a collection of children, use an array instead.

                                    instead of {link} we use {`${link}`}
                                */}
                                <p className="text-sm">
                                    {link.length > 30
                                        ? `${link.substr(0, 30)}...`
                                        : `${link}`}
                                </p>

                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );

        case '/image':
            return (
                <div className="flex flex-wrap items-start">
                    {results.map(({ image, link: { href, title } }, index) => (
                        <a
                            className="sm:p-3 p-4"
                            href={href}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={image?.src}
                                alt={title}
                                loading="lazy"
                                className="h-36 w-56 object-cover"
                            />
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );

        case '/news':
            return (
                <div className="flex flex-wrap">
                    {results.map(({ link, source, title }, index) => (
                        <div className="md:w-2/5 w-full sm:p-3 p-5" key={index}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                <p className="text-md dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href={source?.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {source?.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            );

        case '/video':
            return (
                <div className="flex flex-wrap">
                    {results.map(({ link }, index) => (
                        <div className="sm:p-3 p-5" key={index}>
                            <ReactPlayer
                                url={link}
                                controls
                                width="335px"
                                height="200px"
                            />
                        </div>
                    ))}
                </div>
            );

        default:
            return 'error...';
    }
};
