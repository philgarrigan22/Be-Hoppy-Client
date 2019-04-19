import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { findBreweries } from '../api'
import YelpResults from './YelpResults'
import messages from '../messages.js'
import '../../../css/breweries/Breweries.scss'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'

class FindBreweries extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      empty: false,
      businesses: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    const { search } = this.state
    const { user, snackBar } = this.props
    event.preventDefault()
    findBreweries(search, user)
      .then((res) => {
        if (res.data.businesses) {
          this.setState({ businesses: res.data.businesses, search: '', empty: false })
        } else {
          this.setState({ search: '', empty: true })
        }
      })
      .catch(() => {
        this.setState({ search: '' })
        snackBar(messages.submitSearchFailure, 'error')
      })
  }

  render () {
    const { search, businesses, empty } = this.state

    if (empty) {
      return (
        <Fragment>
          <div className='yelp-container'>
            <form className='find-breweries-form' onSubmit={this.submitSearch}>
              <h3>Go out and visit your local breweries!</h3>
              <input
                required
                name='search'
                value={search}
                type='text'
                placeholder='Where you at?'
                onChange={this.handleChange} />
              <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
            <Paper>
              <h2>We are unable to pull up breweries in your area. Try searching in another area.</h2>
            </Paper>
          </div>
        </Fragment>
      )
    } else {
      return (
        <div className='yelp-container'>
          <CssBaseline />
          <div className="paper">
            <Typography component="h1" variant="h5">
            Go out and visit your local breweries!
            </Typography>

            <form className='find-breweries-form' onSubmit={this.submitSearch}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="text"
                    required
                    fullWidth
                    id="search"
                    label="Where you drinkin?"
                    name="search"
                    value={search}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <div className="search-btn-submit">
                <Button type="submit" variant="contained" color="primary" fullWidth>Search</Button>
              </div>
            </form>
          </div>

          <div className='returned-breweries'>
            {businesses.map(brewery =>
              <YelpResults key={brewery.id}
                name={brewery.name}
                imageUrl={brewery.image_url}
                isClosed={brewery.is_closed}
                url={brewery.url}
                reviewCount={brewery.review_count}
                rating={brewery.rating.toString().replace(/\./g, '')}
                displayAddress={brewery.location.display_address}
                displayPhone={brewery.display_phone}
              />)}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(FindBreweries)
