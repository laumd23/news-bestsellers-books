import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';
import './form.scss';


const Form = () => {
  const { getFormData } = useContext(GlobalContext)
  const navigate = useNavigate();

  const dataHandler = (e) => {
    e.preventDefault();
    const object = new FormData(e.target);
    const data = Object.fromEntries(object);
    getFormData(data);
    navigate('/listbooks');
  };

  return (
    <div className='app'>
      <div className='form-container'>
        <div><h2>Leave your opinion!</h2></div>
        <div className='comments-container'>
          <form onSubmit={dataHandler}>
            <label htmlFor="username">Name</label>
            <input type="text" placeholder="Name" id="username" name="username" required />
            <label htmlFor="bookName">Book Name</label>
            <input type="text" placeholder="Book name" id="bookName" name="bookName" required/>
            <label htmlFor="comments">Comments</label>
            <textarea placeholder="Comments" id="comments" name="comments" cols="30" rows="10" required></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;