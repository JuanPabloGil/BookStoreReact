import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <div className="App panel-bg">
      <header className="headerMenu d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center menuContainer">
          <h3 className="Bookstore-CMS mr-5">BookStore CMS</h3>
          <h5 className="BOOKS mr-5">BOOOKS</h5>
          <h5 className="CATEGORIES">CATEGORY</h5>
          <CategoryFilter />
        </div>
        <div className="iconContainer d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser} /></div>

      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
