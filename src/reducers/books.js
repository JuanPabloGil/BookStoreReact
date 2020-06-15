
const book1 = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'The Martian',
  category: 'Sci-Fi'
}

const book2 = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Matrix',
  category: 'Horror'
}

const books = (state = [book1, book2], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state, action.payload
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state
  }

};

export default books;