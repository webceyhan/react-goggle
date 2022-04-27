import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔍 All' },
    { url: '/image', text: '🖼 Images' },
    { url: '/video', text: '🎥 Videos' },
    { url: '/news', text: '📰 News' },
];

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }, index) => (
                <NavLink
                    key={index}
                    to={url}
                    className="text-blue-700 dark:text-blue-300 border-b-2 hover:border-blue-700 pb-2 mx-2"
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
