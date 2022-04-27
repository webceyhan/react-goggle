import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const location = useLocation();
    const { results, loading, searchTerm, setSearchTerm, fetchResults } =
        useResultContext();

    useEffect(() => {
        fetchResults(searchTerm, location.pathname.slice(1));
    }, [location.pathname]);

    if (loading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-center spae-y-6 sm:px-56">
                    {results?.map(({ link, title }, index) => (
                        <div className="md:w-2/3 w-full" key={index}>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {/* truncate if text is too long */}
                                    {link.length > 30
                                        ? link.substring(0, 30) + '...'
                                        : link}
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
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <a
                            className="sm:p-3 p-5"
                            href={href}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="w-36 vreak-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );

        case '/news':
            return (
                <div className="flex flex-wrap justify-center spae-y-6 sm:px-56">
                    {results?.map(({ link, id, source, title }, index) => (
                        <div className="md:w-2/5 w-full" key={index}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                <p className="text-lg dark:text-blue-300 text-blue-700">
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
                    {results?.map(({ link }, index) => (
                        <div className="p-2" key={index}>
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
