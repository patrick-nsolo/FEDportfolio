import React from 'react';
import Typed from 'react-typed';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="intro">Hello! <span class="wave">👋🏾</span> I'm Patrick  </h1>
      <h2 className="role">
        <Typed strings={['Front End Developer/ Graphic Designer']} typeSpeed={40} backSpeed={50} loop/>
      </h2>
      <h2>Self taught and passionate about code and design. Always Learning.</h2>
    </div>
  )
}

export default Home
