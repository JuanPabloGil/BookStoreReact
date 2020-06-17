import React from 'react';
import { useDispatch } from 'react-redux'
import { createBook } from '../actions'

const BooksForm = () => {

  const [book, useBook] = React.useState({
    title: '',
    id: '',
    category: 'Action'
  });

  const ResetBook = () => {
    useBook({
      title: '',
      id: '',
      category: 'Action'
    })
  }

  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();

  const HandleError = (value) => {
    setError(value);
  }

  const { title, id, category } = book;

  const HandleChange = (e) => {
    useBook({
      ...book,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 100) + 1
    });
  }

  const SubmitData = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      HandleError(true);
      return
    }

    HandleError(false);
    dispatch(createBook(book));
    ResetBook();
  }

  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  const options = categories.map(category => <option key={category} value={category} > {category} </option>)

  return (
    <div className="grey-bg pt-4 pb-5">
      <div className="formContainer  pt-5">
        {error ? <div className="alert alert-danger">Error - Please fill all the fields. </div> : null}
        <h2 className="titleAddBook">ADD NEW BOOK</h2>
        <form className="d-flex align-items-center justify-content-between" onSubmit={SubmitData}>
          <input className="input" placeholder="Title of the book" name="title" onChange={HandleChange} value={title}></input>
          <select className="input-select " onChange={HandleChange} name="category" value={category}>
            {options}
          </select>
          <button className="add-book " type="submit" value="Submit" >
            Submit
        </button>
        </form>
      </div>
    </div>
  );
}

export default BooksForm;