import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';

export const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes />
                <Footer />
            </div>
        </div>
    );
};
