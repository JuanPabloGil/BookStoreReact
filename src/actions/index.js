export const createBook = value => ({
  type: 'CREATE_BOOK',
  payload: value,
});

export const removeBook = value => ({
  type: 'REMOVE_BOOK',
  payload: value,
});
