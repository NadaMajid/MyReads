import React, { Component } from 'react';

class BookShelfChanger extends Component{
    render(){
      let book = this.props.book;
      const shelfBooks = this.props.books;

      if(shelfBooks.length > 0){
        var temp = shelfBooks.filter((shelfBook) => shelfBook.id === book.id)[0];
        if(temp !== undefined){
          book = temp
        }
      }
      return(
          <div className="book-shelf-changer">
            <select onChange = {(event) => this.props.onShelfChange(book, event.target.value)} defaultValue={book.shelf === undefined ? "none" : book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
      );
    }
}
export default BookShelfChanger