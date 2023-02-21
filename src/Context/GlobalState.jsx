import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  fullBooks: [],
  formData: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getOverview = async () => {
    const API_KEY = '0k6rklfEY4YM2cPNAMVynmD9o6nUkD13';

    try {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview?api-key=${API_KEY}`);
      dispatch({
        type: 'GET_FULL_BOOKS',
        payload: res.data.results.lists,
      });
    } catch (error) {
      console.error(error);
    };
  };

  const getFullOverview = async () => {
    const API_KEY = '0k6rklfEY4YM2cPNAMVynmD9o6nUkD13';
    try {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview?api-key=${API_KEY}`);
      dispatch({
        type: 'GET_FULL_BOOKS',
        payload: res.data.results.lists
      });
    } catch (error) {
      console.error(error);
    };
  };
  const getFormData = (objectData) => {
    dispatch({
      type: 'GET_FORM_DATA',
      payload: objectData
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        fullBooks: state.fullBooks,
        getOverview,
        getFullOverview,
        formData: state.formData,
        getFormData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
