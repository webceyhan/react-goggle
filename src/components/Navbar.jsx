import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="flex flex-wrap justify-center items-start border-b dark:border-gray-700 border-gray-200 p-5 pb-0">
            <Link
                to="/"
                className="text-3xl text-slate-600 dark:text-white p-0.5"
            >
                Goggle
            </Link>
            <Search />
            <button
                type="button"
                onClick={() => setDarkTheme(!darkTheme)}
                className="text-slate-100 bg-slate-400 dark:bg-slate-700 border border-gray-500 hover:shadow-lg rounded-full py-1 px-3 my-1"
            >
                {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
    );
};
