import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GBSearch from 'google-books-search';
import SearchBar from './components/search-bar';
import BookList from './components/book-list';

const API_KEY = 'AIzaSyArze3-WTqWExDr4fdaHhER1-C7_Y1BY38';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books:[]
        };
    } 

    componentDidMount() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter&filter=full&orderBy=relevance&printType=books
        `).then(response =>{
            if (response.ok) {
                response.json().then(books => {
                  this.setState({ books: books.items });
                });
            }
        });
    }


    render() {
        return (
        <div>
            <p> Search Books</p>
            <SearchBar/>
            <BookList books={ this.state.books } />
        </div>
        )
    }
}


// Generate HTML from the component and render it in the the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));