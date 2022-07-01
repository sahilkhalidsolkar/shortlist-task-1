import React from 'react'
import RecommendationListItem from './RecommendationListItem'
import '../styles/RecommendationList.css'
const RecommendationList = ({recommendationList}) => {
  return (
    <>
    {recommendationList.map(item=><RecommendationListItem item={item}/>)}
    <p className="more">See More...</p>
    </>
  )
}

export default RecommendationList