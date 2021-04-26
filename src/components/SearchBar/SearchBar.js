import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessListContext from '../../context/BusinessListContext'
import ApiService from '../../services/api-service'
import './SearchBar.css'

export default function SearchBar() {

  const [searchZip, setSearchZip] = useState()
  const [loading, setLoading] = useState(false);
  const context = useContext(BusinessListContext)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target[0].value)
  }

  function handleSearch(zipCode) {
    const zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(zipCode)) {
      return;
    }
    setLoading(true);
    const query = '?location=' + zipCode
    ApiService.getBusinesses(query)
      .then(businesses => {
        context.setZipCode(zipCode)
        context.setTotalBusinesses(businesses.total)
        context.setBusinessList(businesses.businesses)
        setLoading(false);
        history.push(`/search${query}`)
      })
      .catch(error => {
        console.error({ error });
        setLoading(false);
      })
  }

  return (
    <form id='search' className='search-bar' onSubmit={handleSubmit} >
      <label htmlFor='zip-code-input'>
        Zip Code
      </label>
      <input
        id='zip-code-input'
        type='text'
        onChange={e => setSearchZip(e.target.value)}
        name='zip-code'
        placeholder={context.zipCode}
      />
      {loading
        ? <FontAwesomeIcon className='spinner' icon='spinner' spin />
        : <FontAwesomeIcon onClick={() => handleSearch(searchZip)} className='search' icon='search' />
      }
    </form>
  )
}