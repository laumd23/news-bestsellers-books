import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios';

const initialState = {
  books: [],
  fullBooks: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getOverview = async () => {
    const API_KEY = '0k6rklfEY4YM2cPNAMVynmD9o6nUkD13';

    try {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview?api-key=${API_KEY}`);
      dispatch({
        type: 'GET_BOOKS',
        payload: res.data.results.lists[9].books,
      })
      console.log(res.data.results.lists[9].books);
    } catch (error) {
      console.error(error);
    }
  }

  const getFullOverview = async () =>{
    const API_KEY = '0k6rklfEY4YM2cPNAMVynmD9o6nUkD13';
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview?api-key=${API_KEY}`);
      dispatch({
        type: 'GET_FULL_BOOKS',
        payload: res.data.results.lists
      })
      console.log(res.data.results.lists);
    }catch(error){
      console.error(error);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        books: state.books,
        getOverview,
        fullBooks: state.fullBooks,
        getFullOverview
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}