import { useState, useEffect } from 'react'
import './App.css'
import './styles.css'
import axios from 'axios'

const bookApi = import.meta.env.VITE_BOOK_API;

function AddBook() {

    const handleSubmit = function(event) {
        event.preventDefault();
        const form = event.target;
        const { title, author, description } = form;
        console.log(title);
        const book = {
            bookTitle: title.value,
            bookAuthor: author.value,
            description: description.value
        };
        axios.post('http://localhost:5000/api/v1/book', book)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            })
    }

    return (
        <>
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Book</h1>
                            <p className="lead text-center">Create new book</p>
                            <form noValidate="" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Title of the Book"
                                        name="title"
                                        className="form-control"
                                        defaultValue=""
                                        spellCheck="false"
                                        data-ms-editor="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Author"
                                        name="author"
                                        className="form-control"
                                        defaultValue=""
                                        spellCheck="false"
                                        data-ms-editor="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Describe this book"
                                        name="description"
                                        className="form-control"
                                        defaultValue=""
                                        spellCheck="false"
                                        data-ms-editor="true"
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBook
