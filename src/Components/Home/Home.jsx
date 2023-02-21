import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import './Home.scss';

const Home = () => {
  const { books, getOverview } = useContext(GlobalContext);

  useEffect(() => {
    getOverview();
  }, []);

  const print = books.map((category, index) => {
    return (
      <div key={index} className='lists-full-overview'>
        <div className='category-title'>
          <h2>{category.list_name}</h2>
        </div>
        <div className='books-by-category'>
          {category.books.map((books, index) => {
            return (
              <div key={index} className='book-container'>
                <h4>{books.title}</h4>
                <img src={books.book_image} alt="portada libro" />
                <div className='author-link-container'>
                  <div className='author'>Autor: {books.author}</div>
                  <a href={books.amazon_product_url}> Cómpralo por Amazon</a>
                </div>
              </div>
            );
          })};
        </div>
      </div>
    );
  });

  return (
    <div className='home-container'>
      <div className='principal-title'>
        <h1>Top 5 de Best Sellers</h1>
      </div>
      <div className='list-all-container'>
        {print}
      </div>
    </div>
  );
};

export default Home;
