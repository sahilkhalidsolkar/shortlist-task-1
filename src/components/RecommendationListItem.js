import React from 'react'
import '../styles/RecommendationListItem.css'
const RecommendationListItem = ({item:{profilePhoto,profileName}}) => {
  return (
    <div className='list'>
        <div className='profile_section'>
        <img src={profilePhoto} alt={profileName} />
        <p>{profileName}</p>
        </div>
        <button className='follow_button'>follow</button>
    </div>
  )
}

export default RecommendationListItem