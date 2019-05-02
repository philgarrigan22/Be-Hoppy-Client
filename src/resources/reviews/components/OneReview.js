import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import { showOneReview, deleteReview } from '../api'
import '../../../css/reviews/Review.scss'

import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class OneReview extends Component {
  constructor () {
    super()

    this.state = {
      review: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, snackBar } = this.props
    const id = this.props.match.params.id
    showOneReview(user, id)
    // sends back object with data => reviews for our listing
      .then(response => this.setState({ review: response.data.review }))
      .catch(() => {
        snackBar(messages.showOneReviewFailure, 'warning')
      })
  }

  handleDelete = (event) => {
    event.preventDefault()
    const { user, snackBar } = this.props
    const id = this.props.match.params.id
    deleteReview(user, id)
      // .then(() => snackBar(messages.deleteReviewSuccess, 'success'))
      // .then(() => <Redirect to="/reviews"/>)
      .then(() => this.setState({ deleted: true }))
      .then(() => snackBar(messages.deleteReviewSuccess, 'success'))
      .catch(() => {
        snackBar(messages.deleteReviewFailure, 'error')
      })
  }

  render () {
    if (!this.state.review) {
      return (
        <div>
          <h3>Grabbing your reviews.</h3>
          <LinearProgress />
        </div>
      )
    }

    if (this.state.deleted) {
      return <Redirect to={{
        pathname: '/reviews'
      }} />
    }

    const { beer, brewery, rating, location, flavor } = this.state.review

    return (
      <Fragment>
        <Paper>
          <div className="review-content" >
            <h2>{beer}</h2>
            <h3>{brewery}</h3>
            <p>Your Rating: {rating}</p>
            <p>Type: {this.state.review.beer_type}</p>
            <p>Location: {location}</p>
            <p>Flavor: {flavor}</p>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={10} sm={5}>
                <div className="edit-btn">
                  <Button onClick ={this.handleDelete} variant="contained" color="secondary" fullWidth>
                    Delete Review
                  </Button>
                </div>
              </Grid>
              <Grid item xs={10} sm={5}>
                <div className="edit-btn">
                  <Button component={Link} to={this.props.match.url + '/edit'} variant="contained" color="primary" fullWidth>
                    Edit Review
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={10} sm={6}>
                <div className="edit-btn">
                  <Button component={Link} to="/reviews" variant="contained" color="primary" fullWidth>
                    Back
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Fragment>
    )
  }
}

export default withRouter(OneReview)
