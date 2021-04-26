import config from '../config'

const ApiService = {

  getBusinesses(query='') {
    return fetch(`${config.API_ENDPOINT}/search${query}&sort_by=distance`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getBusinessDetails(businessId) {
    return fetch(`${config.API_ENDPOINT}/${businessId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getRatings(businessId) {
    return fetch(`${config.RATING_ENDPOINT}/${businessId}`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  addRating(businessId, rating) {
    const newRating = {
      business_id: businessId,
      rating: rating,
    }
    return fetch(`${config.RATING_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRating)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default ApiService