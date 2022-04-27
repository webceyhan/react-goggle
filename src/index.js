import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { Results } from './components/Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* parent route (as layout) */}
                <Route path="/" element={<App />}>
                    {/* child routes */}
                    {['/search', '/images', '/news', '/videos'].map((path) => (
                        <Route path={path} element={<Results />} key={path} />
                    ))}

                    {/* default redirection from home */}
                    <Route index element={<Navigate to="/search" />} />
                </Route>
            </Routes>

            <App />
        </BrowserRouter>
    </React.StrictMode>
);
