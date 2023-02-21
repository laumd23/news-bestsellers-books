import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';


const Books = () => {
  const { fullBooks } = useContext(GlobalContext);
  return (
    <>
      {
        fullBooks.map((category, index) => {
          return (
            <div key={index} className='lists-full-overview'>
              <div className='category-title'>
                <h2>{category.list_name}</h2>
              </div>
              <div className='books-by-category'>
                {category.books.map((bookLibrary, index) => {
                  return (
                    <div key={index} className='book-container'>
                      <h4>{bookLibrary.title}</h4>
                      <img src={bookLibrary.book_image} alt="portada libro" />
                      <div className='author-link-container'>
                        <div className='author'>Autor: {bookLibrary.author}</div>
                        <a href={bookLibrary.amazon_product_url}> Cómpralo por Amazon</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Books;
