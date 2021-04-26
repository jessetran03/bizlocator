import React, { useEffect, useContext } from 'react';
import Business from '../../components/Business/Business'
import BusinessListContext from '../../context/BusinessListContext'
import PageNumbers from '../../components/PageNumbers/PageNumbers'
import ApiService from '../../services/api-service'
import './BusinessList.css'

export default function BusinessList(props) {

  const query = props.location.search
  const context = useContext(BusinessListContext)

  const offset = () => {
    if (query.includes('offset')) {
      let string = '';
      for (let i = query.length; query[i] !== '='; i--) {
        string = query[i] + string;
      }
      return parseInt(string)
    }
    else {
      return 0
    }
  }

  useEffect(() => {
    if (context.businessList.length === 0) {
      ApiService.getBusinesses(query)
        .then(businesses => {
          context.setTotalBusinesses(businesses.total)
          context.setBusinessList(businesses.businesses)
        })
        .catch(error => console.error({ error }))
    }
  }, [query, context]);

  return (
    <section className='list-page'>
      <h1>All Results</h1>
      <ol className='business-list'>
        {context.businessList.length === 0 &&
          <p>There are no businesses</p>
        }
        {context.businessList
          .map((business, index) =>
            <Business index={index + 1 + offset()} business={business} key={business.id} />
          )}
      </ol>
      <PageNumbers />
    </section>
  );
}
