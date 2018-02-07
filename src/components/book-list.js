import React from 'react';

const BookList = (props) => {
    return (
        <ul className="col-md-4">
            { props.books.length}
        </ul>
    )
};

export default BookList;