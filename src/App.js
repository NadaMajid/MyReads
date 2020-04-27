import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfList from './components/BookShelfList'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)                
      this.setState((currentState) => ({
        books: currentState.books.map((b) => (b.id === book.id ? {...b, shelf} : b ))
      }))
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => 
            <BookShelfList 
              onShelfChange={this.handleShelfChange} 
              books={this.state.books}
            />}
          ></Route>
          <Route
            path='/search'
            render={() => (
              <SearchBooks
                onShelfChange={this.handleShelfChange} 
                books={this.state.books}
              />
            )}>
          </Route>
      </div>
    )
  }
}

export default BooksApp
