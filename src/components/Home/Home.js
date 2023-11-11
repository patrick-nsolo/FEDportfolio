import React from 'react';
import Typed from 'react-typed';
import './Home.css';


const  Home = () => {
  return (
    <div className="home-container">
      <h1 className="intro">Hello! <span class="wave">👋🏾</span> I'm Patrick.</h1>
      <h2 className="role">
        <Typed strings={['Front End Developer/ Graphic Designer.']} typeSpeed={40} backSpeed={50} loop={false}/>
      </h2>
      <h2 className='role-tag'>Self taught, and passionate about code and design.<br/> Always Learning.</h2>
      <div className='btn-container'>
        <button>Let's Connect</button>
      </div>
      <a href='#projects'>
        <p className='works'>My works</p>
        <div className='caret caret-float'></div>
      </a>
    </div>
  )
}

export default Home
