import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔍 All' },
    { url: '/image', text: '🖼 Images' },
    { url: '/video', text: '🎥 Videos' },
    { url: '/news', text: '📰 News' },
];

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-2 px-2">
            {links.map(({ url, text }, index) => (
                <NavLink
                    key={index}
                    to={url}
                    className={({ isActive }) => {
                        const classes =
                            ' dark:text-blue-300 border-b-2 hover:border-blue-700 py-1 px-2';
                        return isActive
                            ? `${classes} border-blue-700`
                            : `${classes} border-transparent`;
                    }}
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
