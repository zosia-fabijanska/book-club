import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GBSearch from 'google-books-search';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyArze3-WTqWExDr4fdaHhER1-C7_Y1BY38';


class App extends Component {
    constructor(props) {
        super(props);

        this.setState = {
            books:[]
        };
    } 

    componentDidMount() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter`).then(response =>{
            if (response.ok) {
                response.json().then(data => {
                  console.log(data);
                });
            }
        });
    }


    render() {
        return (
        <div>
            <p> Search Books</p>
            <SearchBar/>
        </div>
        )
    }
}


// Generate HTML from the component and render it in the the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));