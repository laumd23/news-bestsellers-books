import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import './listBooks.scss';
import '../../media-queries.scss';
import Books from '../Books/Books';

const ListBooks = () => {
  const { getFullOverview, formData } = useContext(GlobalContext);

  useEffect(() => {
    getFullOverview();
    localStorage.setItem('form', JSON.stringify(formData));
  }, []);

  return (
    <div className='home-container'>
      <div className='principal-title'>
        <h1>All Series Bestseller Books</h1>
      </div>
      <div className='list-all-container'>
        <Books/>
      </div>
    </div>
  );
};

export default ListBooks;