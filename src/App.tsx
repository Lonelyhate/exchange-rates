import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ValutePage from './pages/ValutePage/ValutePage';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/:charcode' element={<ValutePage/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
