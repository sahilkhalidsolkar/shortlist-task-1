import React from 'react'
import displayPic from '../assets/comp_engg_home.png'
import '../styles/DisplayPic.css'

const DisplayPic = () => {
  return (
    <>
    <div className='display_pic_container'>
        <img className='display_pic' src={displayPic} alt="Computer Engineering" />
        <div className='display_pic_overlay'>
        <div className="container content">
            <p className="title">Computer Engineer</p>
            <p className="sub_title">142,765 Computer Engineers follow this</p>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default DisplayPic