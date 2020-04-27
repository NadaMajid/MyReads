import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

class BookShelf extends Component {
    static proptypes ={
        Books: PropTypes.array.isRequired,
    }
    render(){
        return(
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.filter((book) => book.shelf === this.props.shelf).map((book) => (
                        <li key={book.title}>
                          <Book onShelfChange = {this.props.onShelfChange} book={book} books={this.props.books}/>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                </div>
        );
    }

}
export default BookShelf