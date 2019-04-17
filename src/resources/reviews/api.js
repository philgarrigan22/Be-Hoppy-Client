import apiUrl from '../../apiConfig'
import axios from 'axios'

export const showReviews = user => {
  console.log('user data is ')
  console.log(user)
  return axios({
    url: apiUrl + '/reviews',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
