import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Books from './pages/Books';
import NewBook from './pages/NewBook';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/book/new/:bookId" element={<NewBook />} /> 
        </Routes>
    );
}

export default AppRoutes;
