import apiUrl from '../../apiConfig'
import axios from 'axios'

export const findBreweries = (search, user) => {
  return axios({
    url: apiUrl + '/yelp-search',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { search }
  })
}
