import React from 'react';
import {useSelector} from 'react-redux'
import Book from './Book'

const BooksList = () => {
  const books = useSelector ( state => state.books)
  return (
    <div>
      <h1>BooksList</h1>
      <table>
        <thead>
          <tr>
          <th>Title</th>
          <th>Category</th>
          <th>ID</th>
        </tr>  
        </thead>
        
        <tbody>
          {books.map((book) => <Book key={book.id} book={book}/>)}
        </tbody>
        
        
      </table>
    </div>
    
    );
}
 
export default BooksList;