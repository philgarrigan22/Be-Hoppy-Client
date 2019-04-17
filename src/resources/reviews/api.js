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

export const showOneReview = (user, id) => {
  console.log('showOneReview API USER is ')
  console.log(user)
  console.log('showOneReview API ID is ')
  console.log(id)
  return axios({
    url: `${apiUrl}/reviews/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const deleteReview = (user, id) => {
  console.log('deleteReview API USER is ')
  console.log(user)
  console.log('deleteReview API ID is ')
  console.log(id)
  return axios({
    url: `${apiUrl}/reviews/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
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
