import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { findBreweries } from '../api'
import YelpResults from './YelpResults'
import messages from '../messages.js'
import '../../../css/breweries/Breweries.scss'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
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
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} sm={10}>
              <div className="brewery-search-header">
                <h1>Go out and visit your local breweries!</h1>
              </div>
            </Grid>
          </Grid>
          <div className='find-breweries-container'>
            <Paper>
              <CssBaseline />
              <div className="find-breweries-form">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={10} sm={5}>
                    <div className="brewery-search-form-header">
                      <h2>Search Breweries by Location</h2>
                    </div>
                  </Grid>
                </Grid>

                <form onSubmit={this.submitSearch}>
                  <Grid className="form-input" container spacing={24}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name='search'
                        value={search}
                        type='text'
                        placeholder='Where you at?'
                        onChange={this.handleChange} />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={10} sm={4}>
                      <div className="search-btn-submit">
                        <Button type="submit" variant="contained" color="primary" fullWidth>Search</Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Paper>
            <div className="empty-results-container">
              <Paper>
                <CssBaseline />
                <div className="empty-results">
                  <h3>We are unable to pull up breweries in the selected area. Try searching in another area.</h3 >
                </div>
              </Paper>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} sm={10}>
              <div className="brewery-search-header">
                <h1>Go out and visit your local breweries!</h1>
              </div>
            </Grid>
          </Grid>

          <div className='find-breweries-container'>
            <Paper>
              <CssBaseline />
              <div className="find-breweries-form">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={10} sm={5}>
                    <div className="brewery-search-form-header">
                      <h2>Search Breweries by Location</h2>
                    </div>
                  </Grid>
                </Grid>

                <form onSubmit={this.submitSearch}>
                  <Grid className="form-input" container spacing={24}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name='search'
                        value={search}
                        type='text'
                        placeholder='Where you at?'
                        onChange={this.handleChange} />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={10} sm={4}>
                      <div className="search-btn-submit">
                        <Button type="submit" variant="contained" color="primary" fullWidth>Search</Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Paper>
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
