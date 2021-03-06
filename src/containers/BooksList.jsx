import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeBook } from '../actions'
import Book from '../components/Book'


const BooksList = () => {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  }

 
  const filterByCategory = () => {
    let currentBooks = []
    if (filter === '') {
      currentBooks = books.filter(book => book.category !== filter);
    } else {
      currentBooks = books.filter(book => book.category === filter);
    }
    return currentBooks
  }

  return (
    <div className="BookList">
        {filterByCategory().map((book) => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)}
    </div>

  );
}

export default BooksList;