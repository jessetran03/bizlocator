import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api-service'
import ViewerRating from '../../components/ViewerRating/ViewerRating'
import './BusinessPage.css'

export default function BusinessPage(props) {

  const businessId = props.match.params.businessId;
  const [businessDetails, setBusinessDetails] = useState({});
  const [bizRating, setBizRating] = useState([]);

  let address, price, titles;

  if (businessDetails) {
    let location = businessDetails.location
    if (location) address = location.display_address.join(', ');
    let categories = businessDetails.categories
    if (categories) titles = categories.map(category => category.title).join(', ')
    if (businessDetails.price) price = businessDetails.price + ' · '
  }

  useEffect(() => {
    ApiService.getBusinessDetails(businessId)
      .then((businessDetails) => setBusinessDetails(businessDetails))
      .catch(error => console.error({ error }))
    ApiService.getRatings(businessId)
      .then((rating) => setBizRating(rating))
      .catch(error => console.error({ error }))
  }, [businessId]);

  return (
    <section className='details-page'>
      <img src={businessDetails.image_url} alt='' />
      <h2 className='details-name'>
        {businessDetails.name}
      </h2>
      <p className='details-categories'>
        {price}{titles}
      </p>
      <p className='details-phone'>
        {businessDetails.display_phone}
      </p>
      <p className='details-address'>
        {address}
      </p>
      <p className='details-yelp'>
        Yelp Rating: {businessDetails.rating} ({businessDetails.review_count} ratings)
      </p>
      <hr/>
      {bizRating.length !== 0
        ? (<p className='details-biz-rating'>
            BizRating: {parseFloat(bizRating[0].average).toFixed(1)} ({bizRating[0].count} ratings)
          </p>)
        : (<p className='details-biz-rating'>
            Be the first one to leave a BizRating!
          </p>)
      }
      
      <p className='details-rating'>
        Leave your rating here:
      </p>
      <ViewerRating id={businessId} />
    </section>
  );


}
