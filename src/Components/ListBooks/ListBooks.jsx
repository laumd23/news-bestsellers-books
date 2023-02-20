import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import './listBooks.scss';
import '../../media-queries.scss';  

const ListBooks = () => {
  const { fullBooks, getFullOverview , formData} = useContext(GlobalContext);


  useEffect(() => {
    getFullOverview();
    localStorage.setItem('form', JSON.stringify(formData));
  }, []);

  const print = fullBooks.map((book) => {
    const obj = [{ title: book.list_name, books: book.books }];
    return obj.map((arrayBook, index ) => {
      const titles = arrayBook.title;
      const library = arrayBook.books;
      return (
        <div key={index} className='lists-full-overview'>
          <div className='category-title'>
            <h2>{titles}</h2>
          </div>
          <div className='books-by-category'>
            {library.map((bookLibrary, index) => {
              return (
                <div key={index} className='book-container'>
                  <h4>{bookLibrary.title}</h4>
                  <img src={bookLibrary.book_image} alt="portada libro" />
                  <div className='author-link-container'>
                    <div className='author'>Autor: {bookLibrary.author}</div>
                    <a href={bookLibrary.amazon_product_url}> Cómpralo por Amazon</a>
                  </div>
                </div>)
            })}
          </div>
        </div>
      )
    })
  })

  return (
    <div className='home-container'>
      <div className='principal-title'>
        <h1>All Series Bestseller Books</h1>
      </div>
      <div className='list-all-container'>
        {print}
      </div>
    </div>
  )
}

export default ListBooks;