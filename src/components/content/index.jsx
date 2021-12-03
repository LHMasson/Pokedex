import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokedex from '../pokedex';
import List from '../../views/list';

const Content = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Pokedex />} />
            </Routes>
            <Routes>
                <Route path="/list" element={<List />} />
            </Routes>
        </main>
    );
}

export default Content;
