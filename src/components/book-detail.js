import React from 'react';

const BookDetail = ({ book }) => {
    if (!book) {
        return <div>Loading</div>
    }
    

    return (
        <div className = "col-md-5">
            <img  src = { book.volumeInfo.imageLinks.smallThumbnail } />
            <p>{ book.volumeInfo.title }</p>
            <p>{ book.volumeInfo.description }</p>
        </div>
    )
};

export default BookDetail;