import React from 'react';
import {useDispatch} from 'react-redux'
import {changeFilter} from '../actions'

const CategoryFilter = () => {

const dispatch = useDispatch();
  

  const handleFilterChange = (e) =>{
    dispatch(changeFilter(e.target.value));
  }

  const categories = ["All", "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  const options = categories.map(category => <option key={category}  value={category} > {category} </option>  )

  return (
        <select className="select-category" onChange={handleFilterChange} name="category" >
              {options}
        </select>
   );
}
 
export default CategoryFilter;