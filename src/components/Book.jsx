import React from 'react';

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="Lesson-Panel">
      <span className="School-of">{book.category}</span>
      <h3 className="title">{book.title}</h3>
      <span className="Suzanne-Collins">{book.id}</span>
      <br/>
      <button className="Remove pt-3" onClick={() => handleRemoveBook(book.id)} > Remove </button>
    </div>
  );
}

export default Book;