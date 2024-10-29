import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImage from '../../assets/logo.svg';

const Books = () => {
    return (
        <>
            <div className="book-container">
                <header>
                    <img 
                    src={logoImage} alt="Logo" />
                    <span>Welcome, <strong>Alana</strong>!</span>
                    <Link 
                    className="button" 
                    to="book/new/0">Add New Book</Link>
                    <button type="button">
                        <FiPower 
                        size={18} 
                        color="#251fC5"></FiPower>
                    </button>
                </header>
                <h1>Registered Books</h1>
                <ul>
                    <li>
                        <strong>Title:</strong>
                        <p>Docker</p>
                        <strong>Author:</strong>
                        <p>Dockers</p>
                        <strong>Price:</strong>
                        <p>R$ 80</p>
                        <strong>Release Date:</strong>
                        <p>20/5/2020</p>
                        
                        <button type="button">
                            <FiEdit size={20} color="#251FC5"/>
                        </button>
                        
                        <button type="button">
                            <FiTrash2 size={20} color="#251FC5"/>
                        </button>
                    </li>
                </ul>
                <button className="button" type="button">Load More</button>
            </div>
        </>
    );
}

export default Books;
