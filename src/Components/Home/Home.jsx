import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import './Home.scss';

const Home = () => {
  const { books, getOverview } = useContext(GlobalContext);

  useEffect(() => {
    getOverview();
  }, []);

  const print = books.map((book, index) => {
    return <div key={index} className='book-container'>
      <h4>{book.title}</h4>
      <img src={book.book_image} alt="" />
      <div className='author-link-container'>
        <div className='author'>Autor: {book.author}</div>
        <a href={book.amazon_product_url}> Cómpralo por Amazon</a>
      </div>
    </div>
  })


  return (
    <div className='home-container'>
      <div className='principal-title'>
        <h1>Top 5 de Series Books- Best Sellers</h1>
      </div>
      <div className='container-books'>
        {print}
      </div>
    </div>
  )
}

export default Home

