import React from 'react'

import '../styles/Categories.css'
const Categories = () => {
  return (
    <>
    <div className="container ">
        <div className="container_wrapper">
        <ul className='category_container'>
            <li className='category_lists category_active' >All Posts(32)</li>
            <li className='category_lists' >Article</li>
            <li className='category_lists' >Event</li>
            <li className='category_lists' >Education</li>
            <li className='category_lists' >Job</li>
        </ul>
        <div>
            <button className='grey_button'>Write a Post <i className="fa-solid fa-caret-down"></i></button>
            <button className='blue_button'><i className="fa-solid fa-users members" ></i>Join group</button>
        </div>
        </div>
        {/* other responsive */}
        <div className="responsive_categories">
          <p>Posts(368) </p>
          <div className="filter">
            <p>Filter: All</p>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        {/* <select class="form-select" >
          <option value="1">One <i class="fa-solid fa-caret-down"></i></option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        </div>
    </div>
    </>
  )
}

export default Categories