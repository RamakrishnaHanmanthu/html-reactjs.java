import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error('There was an error fetching the book!', error));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <img src={book.url} alt={book.booktitle} width="200" height="200" />
            <h1>{book.booktitle}</h1>
            <p>{book.Booktitle}</p>
            <p>{book.url}</p>
            <p>{book.description}</p>
            <p>{book.author}</p>
            <p>{book.cost}</p>
        </div>
    );
}

export default BookDetail;