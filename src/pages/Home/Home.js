import React, { useEffect, useContext } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import HomeImages from '../../components/HomeImages/HomeImages'
import BusinessListContext from '../../context/BusinessListContext'
import ApiService from '../../services/api-service'
import './Home.css'

export default function Home() {

  const context = useContext(BusinessListContext)
  const array = [0, 1, 2, 3, 4, 5]

  useEffect(() => {
    if (context.businessList.length === 0) {
      ApiService.getBusinesses(`?location=${context.zipCode}`)
        .then(businesses => {
          context.setBusinessList(businesses.businesses)
        })
        .catch(error => console.error({ error }))
    }
  }, [context]);

  return (
    <>
      <section className='home'>
        <h2 className='home-header'>Find a business near you!</h2>
        <SearchBar />
      </section>
      {context.businessList.length > 0 &&
        <section className='home-images-section'>
          <h3>
            Try visiting one of these:
        </h3>
          <section className='home-images-display'>
            {array.map(num =>
              <HomeImages key={num} business={context.businessList[Math.floor(Math.random() * 20)]} />
            )}
          </section>
        </section>
      }
    </>
  );
}
