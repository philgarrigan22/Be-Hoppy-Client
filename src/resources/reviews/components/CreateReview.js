import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import ReviewForm from './ReviewForm'
import { createReview } from '../api'
import messages from '../messages'

class CreateReview extends Component {
  constructor () {
    super()

    this.state = {
      review: {
        beer: '',
        brewery: '',
        rating: '',
        beer_type: '',
        location: '',
        flavor: ''
      },
      created: false,
      message: null
    }
  }

  handleChange = (event) => {
    this.setState({ review: {
      ...this.state.review, [event.target.name]: event.target.value
    } })
  }

    handleSubmit = (event) => {
      event.preventDefault()
      const { user, snackBar } = this.props
      const { review } = this.state
      createReview(user, review)
      // sends back object with data => reviews for our listing
        .then(response => this.setState({
          created: true,
          review: response.data.review
        }))
        .then(() => snackBar(messages.createReviewSuccess, 'success'))
        .catch(() => {
          this.setState({
            review: { ...review, beer: '', brewery: '', rating: '', beer_type: '', location: '', flavor: '' }
          })
          snackBar(messages.createReviewFailure, 'error')
        }
        )
    }

    render () {
      const { review, created } = this.state

      if (created) {
        return <Redirect to={{
          pathname: '/reviews'
        }} />
      }

      const { beer, brewery, rating, location, flavor } = review
      return (
        <Fragment>
          <ReviewForm
            beer={beer}
            brewery={brewery}
            rating={rating}
            type={this.state.review.beer_type}
            loc={location}
            flavor={flavor}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Fragment>
      )
    }
}

export default withRouter(CreateReview)
