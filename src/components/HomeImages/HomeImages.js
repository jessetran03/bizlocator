import React from 'react';
import { useHistory } from 'react-router-dom'
import './HomeImages.css'

export default function HomeImages(props) {

  const history = useHistory();

  const id = props.business.id
  const image = props.business.image_url
  const name = props.business.name

  return (
    <div className='home-images' >
      <img 
        src={image}
        alt=''
        onClick={() => history.push(`/businesses/${id}`)}
      />
      <p>{name}</p>
    </div>
  );
}
