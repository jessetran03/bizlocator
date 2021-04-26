import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiService from '../../services/api-service'
import './ViewerRating.css'
//import PropTypes from 'prop-types'


export default function ViewerRating(props) {
  const { id } = props
  const [rated, setRated] = useState(false);

  function postRating(rating) {
    ApiService.addRating(id, rating)
      .then(setRated(true))
      .catch(error => console.error({ error }))
  }

  function renderUnrated() {
    const unrated = [];
    for (let i = 0; i < 5; i++) {
      unrated.push(
        <FontAwesomeIcon
          key={i + 1}
          onClick={() => postRating(i + 1)}
          className='viewer-star'
          icon={['far', 'star']}
        />
      )
    }
    return unrated;
  }

  function renderRated() {
    return (
      <p>Rating has been recorded</p>
    )
  }

  useEffect(() => setRated(false), [])

  return (
    <>
      {rated
        ? renderRated()
        : renderUnrated()
      }
    </>
  )
}