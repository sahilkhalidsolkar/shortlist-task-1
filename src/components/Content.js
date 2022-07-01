import React from 'react'
import Cards from './Cards'

import Location from './Location'
import Recommendation from './Recommendation'

const Content = ({login}) => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-sm-12" ><Cards/></div>
            <div className="col-md-4 col-sm-12">
              <Location/>
             {login && <Recommendation/>} 
              </div>
        </div>
    </div>
    </>
  )
}

export default Content