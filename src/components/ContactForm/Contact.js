import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact' id='contact'>
        <h2>Lets Connect!</h2>
        <p>If you would like to reach me, Please send me a message here and follow me on social media</p>  
        <div class="contact-links">
            <a className='m-3' href='https://github.com/patrick-nsolo' target='_blank' rel='noreferrer'><i class="fa-brands fa-github icon"></i></a>
            <a className='m-3' href='https://www.facebook.com/hotboi2thamost' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook icon"></i></a>
            <a className='m-3' href='https://www.linkedin.com/in/patrick-nsolo-83b095a2/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin icon"></i></a>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
