import apiUrl from '../../apiConfig'
import axios from 'axios'

export const searchBeer = (search, user) => {
  return axios({
    url: apiUrl + '/search-beer',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { search }
  })
}

export const createReview = (user, review) => {
  return axios({
    url: `${apiUrl}/reviews`,
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { review: review }
  })
}
