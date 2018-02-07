import React from 'react';

const BookListItem = ({ book, onBookSelect }) => {
    const imageURL = book.volumeInfo.imageLinks.smallThumbnail;
    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors;
    return (
        <li onClick ={ () => onBookSelect(book)} >
            <div className="list-group-item">
                <div className = "media-left">
                    <img src={ imageURL } />
                </div>
                <div className = "media-body">
                    <p>{ title }</p>
                    <p>{ author }</p>
                </div>
            </div>
        </li>
    )
};

export default BookListItem;