import React from 'react';
import {useSelector} from 'react-redux'
import Book from '../components/Book'

const BooksList = () => {
  const books = useSelector ( state => state.books)
  return (
    <div>
      <h1>BooksList</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>ID</th>
        </tr>
        {books.map((book) => <Book  book={book}/>)}
        
      </table>
    </div>
    
    );
}
 
export default BooksList;