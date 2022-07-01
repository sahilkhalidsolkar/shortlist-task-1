import React from 'react'
import '../styles/Recommendation.css'
import recoProf1 from '../assets/reco_prof_1.png'
import recoProf2 from '../assets/reco_prof_2.png'
import recoProf3 from '../assets/reco_prof_3.png'
import recoProf4 from '../assets/reco_prof_4.png'
import RecommendationList from './RecommendationList'

const recommendationList=[
    {
    profilePhoto:recoProf1,
    profileName :'Leisure',
    },
    {
    profilePhoto:recoProf2,
    profileName :'Activism',
    },
    {
    profilePhoto:recoProf3,
    profileName :'MBA',
    },
    {
    profilePhoto:recoProf4,
    profileName :'Philosophy',
    },
]

const Recommendation = () => {
  return (
    <>
    <div className="heading">
    <i class="fa-regular fa-thumbs-up"></i> RECOMMENDED GROUPS
    </div>
    <RecommendationList recommendationList={recommendationList} />
    </>
  )
}

export default Recommendation