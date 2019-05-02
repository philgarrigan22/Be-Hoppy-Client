import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { searchBeer } from '../api.js'
import messages from '../messages.js'
import '../../../css/beers/BeerSearch.scss'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'

class SearchBeers extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      empty: false,
      results: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    event.preventDefault()
    const { search } = this.state
    const { user, snackBar } = this.props
    searchBeer(search, user)
      .then((res) => {
        if (res.data.records.length < 1) {
          this.setState({ search: '', empty: true })
        } else {
          this.setState({ results: res.data.records, search: '', empty: false })
        }
      })
      .catch(() => {
        this.setState({ search: '' })
        snackBar(messages.submitSearchFailure, 'error')
      })
  }

  render () {
    const { results, search, empty } = this.state

    if (empty) {
      return (
        <div>
          <div className="search-beers-container">
            <Paper>
              <CssBaseline />
              <div className="search-beer-form">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={10} sm={5}>
                    <div className="beer-search-header">
                      <h2>Search Beers by Name</h2>
                    </div>
                  </Grid>
                </Grid>

                <form className='search-beers-form' onSubmit={this.submitSearch}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        type="text"
                        required
                        fullWidth
                        id="search"
                        label="Search by beer or brewery"
                        name="search"
                        value={search}
                        onChange={this.handleChange}
                      />
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
                        <Button type='submit' variant="contained" color="primary" fullWidth>Search</Button>
                      </div>
                    </Grid>
                    <Grid item xs={10} sm={4}>
                      <div className="search-btn-submit">
                        <Button component={Link} to="/reviews" variant="contained" color="secondary" fullWidth>Back to Reviews</Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Paper>
          </div>

          <div className="empty-results-container">
            <Paper>
              <CssBaseline />
              <div className="empty-results">
                <h3>Looks like that beer is not in our system. Search for another, or create a new review using your super secret beer.</h3>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={10} sm={4}>
                    <Button component={Link} to="/reviews-create" variant="contained" color="primary" fullWidth>
                      Create Review
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

        </div>

      )
    } else {
      return (
        <div>
          <div className="search-beers-container">
            <Paper>
              <CssBaseline />
              <div className="search-beer-form">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={10} sm={5}>
                    <div className="beer-search-header">
                      <h2>Search Beers by Name</h2>
                    </div>
                  </Grid>
                </Grid>

                <form onSubmit={this.submitSearch}>
                  <Grid className="form-input" container spacing={24}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        type="text"
                        required
                        fullWidth
                        id="search"
                        label="Search by beer or brewery"
                        name="search"
                        value={search}
                        onChange={this.handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={10} sm={5}>
                      <div className="search-btn-submit">
                        <Button type='submit' variant="contained" color="primary" fullWidth>Search</Button>
                      </div>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                      <div className="search-btn-submit">
                        <Button component={Link} to="/reviews" variant="contained" color="secondary" fullWidth>Back to Reviews</Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Paper>
          </div>

          <div className='found-beers-container'>
            <Paper>
              {results.map(beer =>
                <div key={beer.fields.id} className='beer-card'>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={11} className="beer-card-inner">
                      <h2>{beer.fields.name}</h2>
                      <h3>{beer.fields.name_breweries}</h3>
                      <p>{beer.fields.descript}</p>
                      <p>Type: {beer.fields.style_name}</p>
                      <p>ABV: {beer.fields.abv}</p>
                      <p>Brewery Location: {beer.fields.city}, {beer.fields.state}</p>
                      <p>Website: {beer.fields.website}</p>
                      <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={10} sm={4}>
                          <div className="select-beer-btn">
                            <Button fullWidth component={Link} to={{
                              pathname: '/create-review-from-search',
                              searchResults: {
                                beerPlaceholder: beer.fields.name,
                                breweryPlaceholder: beer.fields.name_breweries,
                                typePlaceholder: beer.fields.style_name,
                                locPlaceholder: beer.fields.state
                              }
                            }} variant="contained" color="primary">
                          Create New Review
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>

              )}
            </Paper>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(SearchBeers)
