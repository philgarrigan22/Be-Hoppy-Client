import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { showReviews } from '../api'
import messages from '../messages'

import '../../../css/reviews/Review.scss'
import LinearProgress from '@material-ui/core/LinearProgress'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class Reviews extends Component {
  constructor () {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount () {
    const { user, snackBar } = this.props

    showReviews(user)
    // sends back object with data => reviews for our listing
      .then((response) => {
        if (response.data.reviews.length !== 0) {
          this.setState({
            reviews: response.data.reviews
          })
        } else {
          this.setState({
            noReviews: response.data.reviews
          })
        }
      }
      )
      .catch(error => {
        console.error(error)
        snackBar(messages.showReviewsFailure, 'warning')
      })
  }

  render () {
    const { reviews, noReviews } = this.state

    if (noReviews) {
      return (
        <Fragment>
          <Paper>
            <h2>Looks like you have no reviews yet! Get started by reviewing your favorite beers, then check back here.</h2>
            <Button variant="contained" color="secondary">
                      Create Review
              <AddIcon />
            </Button>
          </Paper>
        </Fragment>
      )
    } else if (reviews.length === 0) {
      return (
        <div>
          <h3>Grabbing your reviews.</h3>
          <LinearProgress />
        </div>
      )
    }
    return (
      <Fragment>
        <div>
          <h1>Reviews</h1>
          <Fab component={Link} to="/reviews-create" color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </div>
        <div>
          {reviews.map(review => (
            <Paper key={review.id}>
              <div className="review-content" id={review.id}>
                <p>Name: {review.beer}</p>
                <p>Brewery: {review.brewery}</p>
                <p>Your Rating: {review.rating}</p>
                <p>Type: {review.beer_type}</p>
                <p>Location: {review.location}</p>
                <p>Flavor: {review.flavor}</p>
                <Button component={Link} to={'/reviews/' + review.id} variant="contained" color="primary">
                View
                </Button>
              </div>
            </Paper>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Reviews)
