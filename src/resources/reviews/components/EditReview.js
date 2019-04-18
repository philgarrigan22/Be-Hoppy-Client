import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { showOneReview, editReview } from '../api'
import messages from '../messages'
import ReviewForm from './ReviewForm'

import LinearProgress from '@material-ui/core/LinearProgress'

class EditReview extends Component {
  constructor () {
    super()

    this.state = {
      review: null,
      deleted: false,
      edited: false
    }
  }

  componentDidMount () {
    const { user, snackBar } = this.props
    const id = this.props.match.params.id
    showOneReview(user, id)
    // sends back object with data => review for our listing
      .then(response => this.setState({ review: response.data.review }))
      .catch(error => {
        console.error(error)
        snackBar(messages.showOneReviewFailure, 'warning')
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, snackBar } = this.props
    const { review } = this.state
    const id = this.props.match.params.id
    editReview(user, id, review)
    // sends back object with data => reviews for our listing
      .then(response => this.setState({ review: response.data.review, edited: true }))
      .then(() => snackBar(messages.editReviewSuccess, 'success'))
      .catch(() => {
        this.setState({
          review: { ...review, beer: '', brewery: '', rating: '', beer_type: '', location: '', flavor: '' }
        })
        snackBar(messages.editReviewFailure, 'error')
      }
      )
  }

  handleChange = (event) => {
    this.setState({ review: {
      ...this.state.review, [event.target.name]: event.target.value
    } })
  }

  render () {
    const { review, edited } = this.state

    if (!this.state.review) {
      return (
        <div>
          <h3>Grabbing your review.</h3>
          <LinearProgress />
        </div>
      )
    }

    if (edited) {
      return <Redirect to={{
        pathname: `/reviews/${review.id}`
      }} />
    }

    const { beer, brewery, rating, location, flavor } = review
    return (
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
    )
  }
}

export default withRouter(EditReview)
