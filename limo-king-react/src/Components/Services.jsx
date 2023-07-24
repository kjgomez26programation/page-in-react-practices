import React from 'react'
import './services.css'
import {BiSolidDrink} from 'react-icons/bi';
import {MdCorporateFare} from 'react-icons/md'
import {TbGenderBigender} from 'react-icons/tb'
import {BiSolidPlane} from 'react-icons/bi'
import {BiMoon} from 'react-icons/bi'

const Services = () => {
  return (
    <div className='services'>
      <div className='title-services'>
        <h1>OUR <span>SERVICES</span></h1>
      </div>
        <div className='container-flex'>
         
            <div className='columna'>
                <h1><BiSolidDrink/>Transportation for parties and special events</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi distinctio eius quos doloribus saepe adipisci earum quam illo est, dignissimos pariatur similique repellendus, culpa quia aperiam, maiores dolorum velit fuga. Consectetur, enim voluptas qui aperiam numquam, reprehenderit ratione, officiis dolores soluta vel architecto ea.</p>
            </div>
            <div className='columna'>
                <h1><MdCorporateFare />Transportation for corporate events</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi distinctio eius quos doloribus saepe adipisci earum quam illo est, dignissimos pariatur similique repellendus, culpa quia aperiam, maiores dolorum velit fuga. Consectetur, enim voluptas qui aperiam numquam, reprehenderit ratione, officiis dolores soluta vel architecto ea.</p>
            </div>
            <div className='columna'>
                <h1><TbGenderBigender/>Transportation for weddings</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi distinctio eius quos doloribus saepe adipisci earum quam illo est, dignissimos pariatur similique repellendus, culpa quia aperiam, maiores dolorum velit fuga. Consectetur, enim voluptas qui aperiam numquam, reprehenderit ratione, officiis dolores soluta vel architecto ea.</p>
            </div>
            <div className='columna'>
                <h1><BiSolidPlane/>Airport services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi distinctio eius quos doloribus saepe adipisci earum quam illo est, dignissimos pariatur similique repellendus, culpa quia aperiam, maiores dolorum velit fuga. Consectetur, enim voluptas qui aperiam numquam, reprehenderit ratione, officiis dolores soluta vel architecto ea.</p>
            </div>
            <div className='columna'>
              <h1><BiMoon/>Transport for night trips</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi distinctio eius quos doloribus saepe adipisci earum quam illo est, dignissimos pariatur similique repellendus, culpa quia aperiam, maiores dolorum velit fuga. Consectetur, enim voluptas qui aperiam numquam, reprehenderit ratione, officiis dolores soluta vel architecto ea.</p>
            </div>
        </div>
    </div>
  )
}

export default Services
