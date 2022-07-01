import React from 'react'
import '../styles/Location.css'

const Location = () => {
  return (
    <>
    <div className='location_container'>
        
        <p className='location'><i className="fa-solid fa-location-dot"></i> Noida, India </p>
        <i className="fa-solid fa-pen " ></i>
    </div>
        <div className="underline"></div>
        <div className="location_info">
        <i class="fa-solid fa-circle-info"></i>
        <div>Your location will help us serve better and extend a personalised experience.</div> 
        </div>
    </>
  )
}

export default Location