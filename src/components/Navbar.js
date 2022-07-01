import React from 'react'

import company_logo from '../assets/company_logo.png'
// import Search from '../assets/search_icon.svg'
import '../styles/Navbar.css'
const Navbar = ({setLogin,login}) => {
  return (
    <>
    <div className='navbar_container '>
    <div className='container'>
      <div className="row">
        <div className="col">
        <img src={company_logo} alt="ATG.WORLD"/>
        </div>
        <div className="col">
            <div className='search_bar '>
            <i className="fa-solid fa-magnifying-glass search_icon"></i>
            <input 
            className='input_field'
            type="text" 
            placeholder='Search for your favourite groups in ATC' />
            </div>
        </div>
        <div className="col">
          <div className='accounts  '>
          <p onClick={()=>login?setLogin(false):setLogin(true)}>Create account. <span>It's free!</span> <i className="fa-solid fa-caret-down"></i></p>
          </div>
        </div>
        </div>
    </div>
    </div>
    <div className="other_nav ">
      <div className="back_button">
      <i class="fa-solid fa-arrow-left"></i>
      </div>
      <button className='join_button'>Join Group</button>
    </div>
  </>
  )
}

export default Navbar