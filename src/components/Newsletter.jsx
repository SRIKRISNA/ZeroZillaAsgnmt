import React from 'react'
import './style.scss';

const Newsletter = () => {
  return (
    <div className='news-container'>
        <h3>Sign Up our monthly news....</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <br/>
        <p>Subscribe to updates</p>
        <form>
            <input type='text' placeholder='email.com' ></input>
            <button onClick='#'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter