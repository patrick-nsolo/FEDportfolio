import React from 'react';
import './Gallery.css';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  const images = [
    '../upload/product-label.webp',
    '/upload/business-flier.webp',
    '/upload/company-flier.webp',
    '/upload/e-flier.webp',
    '/upload/flier.webp',
    '/upload/church-flier.webp',
  ]
  return (
    <Carousel className='gallery-bg'>
        {images.map((image,index) => (
          <div key={index} onClick={() => window.open(image, '_blank')}>
            <img src={images} alt={`Image ${index}`}/>
          </div>
        ))}
    </Carousel>
  )
}

export default Gallery
