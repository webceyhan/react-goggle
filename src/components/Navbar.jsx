import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-start space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
                        Goggle 🔍
                    </p>
                </Link>
                <Search />
                <button
                    type="button"
                    onClick={() => setDarkTheme(!darkTheme)}
                    className="text-white bg-slate-600 hover:shadow-lg border-2 border-gray-500 rounded-full py-1 px-3"
                >
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
        </div>
    );
};
