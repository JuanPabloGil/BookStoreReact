import React from 'react';

const BooksForm = () => {

  const [book, useBook] = React.useState({
    title:'',
    id: '',
    category: ''
  });

  

  const HandleChange = (e) => {
    useBook({...book,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 100) + 1
    });
  }

  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  const options = categories.map(category => <option key={category} value={category} > {category} </option>  )

  return (
    <form>
        <input placeholder="Title of the book" name="title" onChange={HandleChange} value={book}></input>
        <select >
              {options}
        </select>
        <button type="submit" value="Submit" >
          Submit
        </button>
    </form>
   );
}
 
export default BooksForm;