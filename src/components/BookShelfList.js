import React, { Component } from 'react';
import PropTypes from 'prop-types' ;
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookShelfList extends Component{
  static proptypes ={
    Books: PropTypes.array.isRequired,
}
  render(){
      return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf onShelfChange = {this.props.onShelfChange} shelf='currentlyReading' books={this.props.books} name='Currently Reading'/>
              <BookShelf onShelfChange = {this.props.onShelfChange} shelf='wantToRead' books={this.props.books} name='Want to Read'/>
              <BookShelf onShelfChange = {this.props.onShelfChange} shelf='read' books={this.props.books} name='Read'/>
              </div>
            </div>
            <div className="open-search">
              <Link to ='/search'>
                <button>Add a book</button>
              </Link>
            </div>
        </div>

      );
  }

}
export default BookShelfList