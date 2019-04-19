import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { searchBeer } from '../api.js'
import messages from '../messages.js'
import '../../../css/beers/BeerSearch.scss'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
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
        <Fragment>
          <CssBaseline />
          <div className='search-beers-container'>
            <h3 className='beer-search-header'>{'Search Beers by Name'}</h3>

            <form className='search-beers-form' onSubmit={this.submitSearch}>
              <Grid container spacing={16}>
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
              <div className="create-btn-submit">
                <Button type='submit' variant="contained" color="primary" fullWidth>Search</Button>
              </div>
              <div className="create-btn-submit">
                <Button component={Link} to="/reviews" variant="contained" color="secondary" fullWidth>Back to Reviews</Button>
              </div>
            </form>

          </div>
          <Paper>
            <h2>Looks like that beer is not in our system. Search for another, or create a new review using your super secret beer.</h2>
            <Button component={Link} to="/reviews-create" variant="contained" color="secondary">
                      Create Review
            </Button>
          </Paper>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <CssBaseline />
          <div className='search-beers-container'>
            <h3 className='beer-search-header'>{'Search Beers by Name'}</h3>
            <form className='search-beers-form' onSubmit={this.submitSearch}>
              <Grid container spacing={16}>
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
              <div className="create-btn-submit">
                <Button type='submit' variant="contained" color="primary" fullWidth>Search</Button>
              </div>
              <div className="create-btn-submit">
                <Button component={Link} to="/reviews" variant="contained" color="secondary" fullWidth>Back to Reviews</Button>
              </div>
            </form>
          </div>
          <div className='found-beers row'>
            {results.map(beer =>
              <div key={beer.fields.id} className='beer-card'>
                <Paper>
                  <Typography component="p">
                    Name: {beer.fields.name}
                  </Typography>
                  <Typography component="p">
                    Brewery: {beer.fields.name_breweries}
                  </Typography>
                  <Typography component="p">
                    ABV: {beer.fields.abv}
                  </Typography>
                  <Typography component="p">
                    Description: {beer.fields.descript}
                  </Typography>
                  <Typography component="p">
                    Type: {beer.fields.style_name}
                  </Typography>
                  <Typography component="p">
                    Brewery Location: {beer.fields.city}, {beer.fields.state}
                  </Typography>
                  <Typography component="p">
                    Website: {beer.fields.website}
                  </Typography>
                </Paper>
                <Button fullWidth component={Link} to={{
                  pathname: '/create-review-from-search',
                  searchResults: {
                    beerPlaceholder: beer.fields.name,
                    breweryPlaceholder: beer.fields.name_breweries,
                    typePlaceholder: beer.fields.style_name,
                    locPlaceholder: beer.fields.state
                  }
                }} variant="contained" color="secondary">
                  Select
                </Button>

              </div>
            )}
          </div>
        </Fragment>
      )
    }
  }
}

export default withRouter(SearchBeers)
