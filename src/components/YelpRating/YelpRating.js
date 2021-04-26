import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './YelpRating.css'

export default function YelpRating(props) {
  const rated = [];
  for (let i = 0; i < props.rating; i++) {
    rated.push(<FontAwesomeIcon key={i + 1} className='star-rated' icon='star' />)
  }
  for (let i = props.rating; i < 5; i++) {
    rated.push(<FontAwesomeIcon key={i + 1} className='star-unrated' icon='star' />)
  }
  return rated;
}