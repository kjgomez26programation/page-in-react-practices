import React from 'react'
import './bafloat.css'
import security from '../Assets/security-guards-secure.jpg'

const Bafloat = () => {
  return (
    <div className='bafloat'>
        <img src={security} alt="" />
        <div className='title-bafloat'>
            <h1>WE PROMISE, YOU WILL HAVER 
                <br />
                THE BEST EXPERIENCE
            </h1>
            <p>Our team of highly trained and friendly drivers will be on hand to make sure you feel comfortable and safe throughout your tour. Whether you need transportation for a special event, an elegant wedding, or an airport transfer, we are committed to providing you with first-class service.</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Bafloat
