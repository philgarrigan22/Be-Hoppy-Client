import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { showReviews } from '../api'
import messages from '../messages'

import '../../../css/reviews/Review.scss'
import LinearProgress from '@material-ui/core/LinearProgress'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

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
      .catch(() => {
        snackBar(messages.showReviewsFailure, 'warning')
      })
  }

  render () {
    const { reviews, noReviews } = this.state

    if (noReviews) {
      return (
        <div className="empty-results-container">
          <Paper>
            <CssBaseline />
            <div className="empty-results">
              <h3>Looks like you have no reviews yet! Get started by reviewing your favorite beers, then check back here.</h3>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={10} sm={4}>
                  <Button component={Link} to="/reviews-create" variant="contained" color="primary">
                    Create Review
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      )
    } else if (reviews.length === 0) {
      return (
        <div className="empty-results-container">
          <Paper>
            <CssBaseline />
            <div className="empty-results">
              <h3>Grabbing your reviews.</h3>
              <LinearProgress />
            </div>
          </Paper>
        </div>
      )
    }
    return (
      <Fragment>
        <div>
          <h1 className="my-reviews-header" >Reviews</h1>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={5}>
              <div className="review-btn-submit">
                <Button component={Link} to="/reviews-create" color="secondary" variant="contained" fullWidth>
            Create New Review
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="review-btn-submit">
                <Button component={Link} to="/search-beer" variant="contained" color="primary" fullWidth>Search for beer</Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          {reviews.map(review => (
            <Paper key={review.id}>
              <div className="review-content" id={review.id}>
                <h2>{review.beer}</h2>
                <h3>{review.brewery}</h3>
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
