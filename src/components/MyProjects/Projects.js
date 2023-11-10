import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className='project-display'>
        <div className='wellnest-project'>
          <div className='wellnest-img'>
            <img src='../images/wellnest.webp'alt=''/>  
          </div>
          <div className='project-details'>
            <h2>Wellnest Showroom Website</h2>
            <p className='desription'>An e-commerce shop. Built using WordPress, HTML, CSS, and PHP</p>
            <a href='https://wellnestshowroom.com/'>Live Page</a>
          </div>
        </div>   
    </div>
  )
}

export default Projects
