import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 p-5 pb-0">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl font-bold text-white bg-blue-500 dark:bg-slate-600 rounded py-2 px-3">
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
