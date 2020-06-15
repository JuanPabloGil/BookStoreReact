import books from './books'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  books: books
});

export default allReducers;
