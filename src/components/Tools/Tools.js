import React from 'react';
import './Tools.css';

const Tools = () => {
  return (
    <div className='tools-container'>
        <div className='stacks'>
            <h2>My Stack</h2>
            <div className="skills">
                <div className="skill">
                    <i className='fa-brands fa-html5 icon'></i>
                    <p className=''>HTML</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-css3-alt icon"></i>
                    <p className="tech-text lead">CSS</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-js icon"></i>
                    <p className="tech-text lead">JAVASCRIPT</p>
                </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <i className='fa-brands fa-react icon'></i>
                    <p className=''>REACTJS</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-github icon"></i>
                    <p className="tech-text lead">GITHUB</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-wordpress icon"></i>
                    <p className="tech-text lead">WORDPRESS</p>
                </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <i className='fa-brands fa-react icon'></i>
                    <p className=''>REACTJS</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-github icon"></i>
                    <p className="tech-text lead">GITHUB</p>
                </div>
                <div className="skill">
                    <i className="fa-brands fa-wordpress icon"></i>
                    <p className="tech-text lead">WORDPRESS</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Tools;
