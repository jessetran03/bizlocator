const config = {
  RATING_ENDPOINT: 'http://localhost:8000/api/ratings',
  API_ENDPOINT: 'http://localhost:8000/api/businesses',
  //API_ENDPOINT: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
  API_KEY: process.env.API_KEY
}

export default config;