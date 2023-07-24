import React, { useEffect, useState } from 'react';
import  './float.css'
import imagen from '../Assets/services.jpg' 
import sedan from '../Assets/A 200 Sedán AMG Line.png'
import sedan2 from '../Assets/C 350e AMG Line.png'
import sedan3 from '../Assets/E 300e AMG Line.png'
import GLE from '../Assets/Nueva GLE 350 de 4MATIC.png'
import AMG from '../Assets/Mercedes-AMG GLE 63 S 4MATIC Coupé.png'
import AMGA from '../Assets/Mercedes-AMG A 35 4MATIC Sedán.png'

const Services = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, []);
  
    const slides = [
      { id: 1, src: GLE, alt: 'GLE' },
      { id: 2, src: sedan, alt: 'Sedan' },
      { id: 3, src: sedan2, alt: 'Sedan 2' },
      { id: 4, src: sedan3, alt: 'Sedan 3' },
      { id: 5, src: AMG, alt: 'AMG' },
      { id: 6, src: AMGA, alt: 'AMGA' },
    ];

  return (
    <div className='service'>
        <img src={imagen} alt="" />
        <div className='container-service'>
            <h1>WE SERVE YOU LIKE A KING</h1>
        </div>
        <div className='title'>
            <h1>OUR <span>FLEET</span></h1>
        </div>
        <div className='slider-container'>
      <div className='slider' style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className='slide'>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className='prev-button' onClick={prevSlide}> &#10094; </button>
      <button className='next-button' onClick={nextSlide}> &#10095; </button>
    </div>
                
    </div>
  )
}

export default Services
