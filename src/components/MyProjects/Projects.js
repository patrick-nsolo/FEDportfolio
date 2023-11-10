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
            <a href='https://wellnestshowroom.com/' target='_blank' rel="noreferrer">Live Page</a>
          </div>
        </div>
        <div className='pfl-project'>
          <div className='pfl-img'>
            <img src='../images/pfl.webp'alt=''/>  
          </div>
          <div className='project-details'>
            <h2>Paradigm Finance Limited Website</h2>
            <p className='desription'>A Microfinance Bank Website. Technology Stack: HTML, CSS and JS.</p>
            <div className='btn-links'>
              <a href='https://pflnigeria.com/' target='_blank' rel="noreferrer">Live Page</a>
              <a href='https://github.com/patrick-nsolo/pfl-fix' target='_blank' rel="noreferrer">Code</a>
            </div>  
          </div> 
        </div>  
        <div className='lhc-project'>
          <div className='lhc-img'>
            <img src='../images/lofty.webp'alt=''/>  
          </div>
          <div className='project-details'>
            <h2>Paradigm Finance Limited Website</h2>
            <p className='desription'>An online Health Agency. Technology Stack: HTML, CSS and JS.</p>
            <div className='btn-links'>
              <a href='https://loftyhealthcareltd.com/' target='_blank' rel="noreferrer">Live Page</a>
              <a href='https://github.com/patrick-nsolo/LOFTY-HEALTHCARE' target='_blank' rel="noreferrer">Code</a>
            </div>  
          </div> 
        </div> 
        <div className='midris-project'>
          <div className='midris-img'>
            <img src='../images/midris.webp' alt=''/>  
          </div>
          <div className='project-details'>
            <h2>Midris Autos Website</h2>
            <p className='desription'>An Online Car Rental Service. Built using WordPress, WooCommerce, and Elementor</p>
            <a href='https://midrisautos.com/' target='_blank' rel="noreferrer">Live Page</a>
          </div>
        </div>
        <div className='aurora-project'>
          <div className='aurora-img'>
            <img src='../images/aurora.webp' alt=''/>  
          </div>
          <div className='project-details'>
            <h2>Aurora Digital Solutions Website</h2>
            <p className='desription'>An Online Car Rental Service. Built using WordPress and Elementor</p>
            <a href='https://auroradigitalsolutions.ng/' target='_blank' rel="noreferrer">Live Page</a>
          </div>
        </div>
        <div className='responsive-pages'>
          <h2>Responsive Landing Pages</h2>
          <p>These Landing Pages help to show case my ability to make a web application responsive on all device screens.</p>
          <div>
            

          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Projects;
