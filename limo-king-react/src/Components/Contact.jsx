import React from 'react'
import './contact.css'
import contact from '../Assets/contact.jpg'

const Contact = () => {
  return (
    <div className='container-contact'>
        <img src={contact} alt="" />
        <div className='title-contact'>
            <h1>CONTACT US</h1>
            <p>+14845101796</p>
            <p>limoking@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact
