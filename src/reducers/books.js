const book1 = {
  id:111,
  title: 'The Martian',
  category: 'Sci-Fi'
}

const book2 = {
  id:112,
  title: 'Matrix',
  category: 'Sci-Fi'
}

const books = (state = [book1, book2], action) => {
  return state
};

export default books;