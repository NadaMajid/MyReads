import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component{
    state = {
      query: '',
      newBooks: []
    }
    
    updateQuery = (query) => {
      this.setState(() => ({
        query
      }))
      
      if(query.length > 0)
        this.handleSearch(query);

      if(query.length === 0){
        this.setState(() => ({
          newBooks: []
        }))
      }
    }

    handleSearch = (query) => {
      BooksAPI.search(query).then((books) => {
        this.setState(() => ({
          newBooks: books
        }))
      })
    }

    render(){
        const { onShelfChange } = this.props;
        let books = this.props.books;

        if(books === undefined) {
          books = []
        }

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => window.location = '/'}>Close</button>
              <div className="search-books-input-wrapper">
                <input
                  type='text'
                  placeholder='Search by title or author'
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {
                      this.state.newBooks.length > 0 ? this.state.newBooks.filter((book) => book.shelf === undefined).map((book) => (
                        <li key={book.id}><Book book={book} books={books} onShelfChange={onShelfChange} /></li>
                      ))
                      : this.state.query.length !== 0 
                      ? <li>No Book found!</li>
                      : null
                    }
              </ol>
            </div>
          </div>
        )
    }
}
export default SearchBooks