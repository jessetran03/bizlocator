import React, { useContext } from 'react'
import BusinessListContext from '../../context/BusinessListContext'
import ApiService from '../../services/api-service'
import './PageNumbers.css'
import { useHistory } from 'react-router-dom'

export default function PageNumbers() {

  const context = useContext(BusinessListContext)
  const history = useHistory();
  
  function arrayNumbers(num) {
    let numPages;
    if (num > 1000) {
      numPages = 50
    }
    else {
      numPages = Math.ceil(num / 20)
    }
    const array = []
    for (let i = 0; i < numPages; i++) {
      array.push(i * 20)
    }
    return array;
  }

  function handleClick(zipCode, number) {
    const query = '?location=' + zipCode + '&offset=' + number
    ApiService.getBusinesses(query)
      .then(businesses => {
        context.setBusinessList(businesses.businesses)
        history.push(`/search${query}`)
      })
      .catch(error => {
        console.error({ error });
      })
  }

  const numbers = arrayNumbers(context.totalBusinesses)

  return (
    <section className='page-numbers' >
      {numbers.map((value, index) => {
        return (
          <button onClick={() => handleClick(context.zipCode, value)} key={index + 1}>
            {index + 1}
          </button>
        )
      })}
    </section>
  )
}