import React from 'react';
import { useHistory } from 'react-router-dom'
import './Business.css'

export default function Business(props) {

  const history = useHistory();

  const index = props.index
  const business = props.business
  const address = business.location.display_address.join(', ')
  const categories = business.categories;
  const titles = categories.map(category => category.title).join(', ')
  let price = ''
  if (business.price) {
    price = business.price + ' · '
  }

  return (
      <li key={business.id} className='business' onClick={() => history.push(`/businesses/${business.id}`)} >
        <h3>{index}. {business.name}</h3>
        <p>Yelp Rating: {business.rating} ({business.review_count} ratings)</p>
        <p>{price}{titles}</p>
        <p>{address}</p>
        <p>{(business.distance / 1609.34709).toFixed(2)} miles away</p>
      </li>
  )
}