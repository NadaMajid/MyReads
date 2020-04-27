import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import noCover from '../assets/no-cover-image.png'

class Book extends Component {

    render(){
        const bookCover =
            this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
            ? this.props.book.imageLinks.thumbnail
            : noCover;
        const title = this.props.book.title ? this.props.book.title : 'No title available';
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                    <BookShelfChanger onShelfChange = {this.props.onShelfChange} book= {this.props.book} books={this.props.books}/>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{Array.isArray(this.props.book.authors) ? this.props.book.authors.join(', ') : ''}</div>
            </div>
        );
    }
}
export default Book
