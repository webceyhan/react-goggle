import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const App = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <div className="my-5">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};
