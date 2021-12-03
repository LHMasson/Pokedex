import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokedex from '../pokedex';

const Content = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Pokedex />} />
            </Routes>
        </main>
    );
}

export default Content;
