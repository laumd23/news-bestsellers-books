const books = (state,action)=>{
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
      };
    case 'GET_FULL_BOOKS':
      return {
        ...state,
        fullBooks:action.payload,
      };
    default:
      return state;
  };
};

export default books;