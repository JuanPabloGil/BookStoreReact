import React from 'react';

const Book = ({book, handleRemoveBook}) => {
  return (

    <tr>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.id}</td>
      <td><button onClick={ () => handleRemoveBook(book.id) } > Remove Book </button></td>
    </tr>
    );
}
 
export default Book;