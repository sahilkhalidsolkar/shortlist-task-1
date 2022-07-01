import React from 'react'

const Card = ({
    image,
    typePhoto,
    title,
    subtitle,
    profilePhoto,
    profileName,
    views,
    date,
    company,
    location,
    button,
    buttonTextColor
    }) => {
  return (
    <div>
  <div class="card" style={{width: '100%',margin:'10px 0'}}>
  {image && <img src={image} class="card-img-top" alt={title}/>}
  <div class="card-body">
    <img src={typePhoto} alt={profileName} style={{marginBottom:'10px'}}/>
    <h5 class="card-title">{title}</h5>

    {subtitle && <p className="card-text">{subtitle}</p>}

    <div className='short_details_container'>
        {date && <p className="short_details"><i class="fa-solid fa-calendar-day"></i> {date}</p>} 
        {company && <p className="short_details"><i class="fa-solid fa-briefcase"></i> {company}</p>} 
        {location && <p className='short_details'><i className="fa-solid fa-location-dot"></i> Noida, India </p>} 
    </div>
   {button && <button style={{
    margin:'15px 0',
    width:'100%',
    color:buttonTextColor,
    background: '#FFFFFF',
    border:' 0.7px solid #A9AEB8',
    borderRadius:' 8px',
   }}>{ button}</button>}
    <div class="card-text other_details">
        <div className='profile'>
            <img src={profilePhoto} alt={profileName} />
            <span className='profile_name'>{profileName}</span>
        </div>    
        <div className="profile_details">
            <div>
            <i class="fa-solid fa-eye"></i> {views} views
            </div>
            <button className='share_button'><i class="fa-solid fa-share-nodes"></i></button>
            </div>    
    </div>
  </div>
</div>
    </div>
  )
}

export default Card