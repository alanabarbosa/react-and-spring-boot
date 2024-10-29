import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImage from '../../assets/logo.svg';

const NewBook = () => {
    return (
        <>
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio"/>
                    <h1>Book</h1>
                    <p>Enter the book information and click on!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Back to Book
                    </Link>
                </section>
                <form>
                    <input
                        placeholder="Title"
                        value={"title"}                       
                    />
                    <input
                        placeholder="Author"
                        value={"author"}
                    />
                    <input
                        type="date"
                        value={"launchDate"}
                    />
                    <input
                        placeholder="Price"
                        value={"price"}
                    />

                    <button className="button" type="submit">Update</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default NewBook;
