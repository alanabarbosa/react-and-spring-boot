import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const history = useNavigate();

    const logout = async () => {
        localStorage.clear();
        history('/');
    }

    const editBook = (id) => {
        try {
            history(`book/new/${id}`);
        } catch (error) {
            alert('Edit failed! Try again.');
        }
    }

    const deleteBook = async (id) => {
        try {
            await api.delete(`api/book/v1/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setBooks(books.filter(book => book.id !== id));
        } catch (err) {
            alert('Delete failed! Try again.');
        }
    }

    async function fetchMoreBooks() {
        const response = await api.get('api/book/v1', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                page: page,
                size: 1,
                direction: 'asc'
            }
        });

        setBooks([ ...books, ...response.data._embedded.bookVOList])
        setPage(page + 1);
    }

   /* useEffect(() => {
        api.get('api/book/v1', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                page: 1,
                size: 4,
                direction: 'asc'
            }
        }).then(response => {
            setBooks(response.data._embedded.bookVOList);
        });
    });*/

    useEffect(() => {
        fetchMoreBooks();
    }, [])

    return (
        <>
            <div className="book-container">
                <header>
                    <img 
                    src={logoImage} alt="Logo" />
                    <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                    <Link 
                    className="button" 
                    to="book/new/0">Add New Book</Link>
                    <button onClick={logout} type="button">
                        <FiPower 
                        size={18} 
                        color="#251fC5"></FiPower>
                    </button>
                </header>
                <h1>Registered Books</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <strong>Title:</strong>
                            <p>{book.title}</p>
                            <strong>Author:</strong>
                            <p>{book.author}</p>
                            <strong>Price:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                            <strong>Release Date:</strong>
                            <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launch_date))}</p>
                            
                            <button onClick={() => editBook(book.id)} type="button">
                                <FiEdit size={20} color="#251FC5"/>
                            </button>
                            
                            <button onClick={() => deleteBook(book.id)} type="button">
                                <FiTrash2 size={20} color="#251FC5"/>
                            </button>
                        </li>
                    ))}
                </ul>
                <button 
                className="button" 
                type="button"
                onClick={fetchMoreBooks}>Load More</button>
            </div>
        </>
    );
}

export default Books;
