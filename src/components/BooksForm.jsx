import React from 'react';

const BooksForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  const options = categories.map(category => <option value={category} > {category} </option>  )

  return (
    <form>
        
        <input placeholder="Title of the book"></input>
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