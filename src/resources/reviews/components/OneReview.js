import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import { showOneReview, deleteReview } from '../api'
import '../../../css/reviews/Review.scss'

import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import Spinner from 'react-bootstrap/Spinner'
// import Alert from 'react-bootstrap/Alert'

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
      .catch(error => {
        console.error(error)
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
      .catch(error => {
        console.error(error)
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

    console.log('reviews component render')
    const { beer, brewery, rating, location, flavor } = this.state.review

    return (
      <Fragment>
        <Paper>
          <div className="review-content" >
            <p>Name: {beer}</p>
            <p>Brewery: {brewery}</p>
            <p>Your Rating: {rating}</p>
            <p>Type: {this.state.review.beer_type}</p>
            <p>Location: {location}</p>
            <p>Flavor: {flavor}</p>
            <Button onClick ={this.handleDelete} variant="contained" color="secondary">
              Delete Review
            </Button>
            <Button component={Link} to={this.props.match.url + '/edit'} variant="contained" color="primary">
              Edit Review
            </Button>
            <Button component={Link} to="/reviews" variant="contained" color="primary">
              Back
            </Button>
          </div>
        </Paper>
      </Fragment>
    )
  }
}

export default withRouter(OneReview)
