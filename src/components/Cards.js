import React from 'react'
import Card from './Card'
import '../styles/Card.css'
import cardImage1 from '../assets/1st_card_image.png'
import typePhoto1 from '../assets/1st_type_icon.png'
import profilePhoto1 from '../assets/1st_profile_pic.png'
import cardImage2 from '../assets/2nd_card_image.png'
import typePhoto2 from '../assets/2nd_type_icon.png'
import profilePhoto2 from '../assets/2nd_profile_pic.png'
import cardImage3 from '../assets/3rd_card_image.png'
import typePhoto3 from '../assets/3rd_type_icon.png'
import profilePhoto3 from '../assets/3rd_profile_pic.png'
import typePhoto4 from '../assets/4th_type_icon.png'
import profilePhoto4 from '../assets/4th_profile_pic.png'
const datas=[
    {
        image: cardImage1,
        typePhoto:typePhoto1,
        title:'What if famous brands had regular fonts? Meet RegulaBrands!',
        profilePhoto:profilePhoto1,
        profileName:'Sarthak Kamra',
        views:'1.4k',
        subtitle:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        },
    {
        image: cardImage2,
        typePhoto:typePhoto2,
        title:'Tax Benefits for Investment under National Pension Scheme launched by Government',
        profilePhoto:profilePhoto2,
        profileName:'Sarah West',
        views:'1.4k',
        subtitle:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        },
    {
        image: cardImage3,
        typePhoto:typePhoto3,
        title:'Finance & Investment Elite Social Mixer @Lujiazui',
        profilePhoto:profilePhoto3,
        profileName:'Ronal Jones',
        views:'1.4k',
        date:'Fri, 12 Oct, 2018',
        location:'Ahmedabad, India',
        button:'Visit Website',
        buttonTextColor:'#E56135',
        },
    {
        typePhoto:typePhoto4,
        title:'Software Developer',
        profilePhoto:profilePhoto4,
        profileName:'Joseph Gray',
        views:'1.4k',
        company:'Innovaccer Analytics Private Ltd.',
        location:'Noida, India',
        button:'Apply on Timesjobs',
        buttonTextColor:'#02B875',
        },
]
const Cards = () => {
  return (
    datas.map(data=><Card {...data}/>)
  )
}

export default Cards