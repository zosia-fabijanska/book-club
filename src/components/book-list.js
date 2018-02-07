import React from 'react';
import BookListItem from './book-list-item';

const BookList = (props) => {
    const bookItems = props.books.map((book) => {
        return <BookListItem 
        onBookSelect = { props.onBookSelect }
        key = { book.etag } 
        book = { book } />
    }) 
    return (
        <ul className="col-md-5">
        { bookItems }
        </ul>
    )
};

export default BookList;