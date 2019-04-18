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
