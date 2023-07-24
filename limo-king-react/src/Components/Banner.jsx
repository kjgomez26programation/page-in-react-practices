import React from 'react'
import './banner.css'
import imagen from '../Assets/banner-react.jpg' 

const Banner = () => {
  return (
    <div className='banner'>
        <img src={imagen} alt="" />
        <div className='banner-content'>
        <h2>The Best Limos</h2>
        <h4>IN NEW YORK</h4>
        <h1>LIMO KING</h1>

     </div>
    
    </div>
  )
}

export default Banner
