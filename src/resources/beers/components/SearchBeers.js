import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { searchBeer } from '../api.js'

import messages from '../messages.js'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
          <div className='search-beers-container'>
            <form className='search-beers-form' onSubmit={this.submitSearch}>
              <h3>{'Search Beers by Name'}</h3>
              <input
                required
                name='search'
                value={search}
                type='text'
                placeholder='Enter a beers name'
                onChange={this.handleChange} />
              <Button type='submit' variant="contained" color="primary">Search</Button>
              <Button component={Link} to="/reviews" variant="contained" color="secondary">Back to Reviews</Button>
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
          <div className='search-beers-container'>
            <form className='search-beers-form' onSubmit={this.submitSearch}>
              <h3>{'Search Beers by Name'}</h3>
              <input
                required
                name='search'
                value={search}
                type='text'
                placeholder='Enter a beers name'
                onChange={this.handleChange} />
              <Button type='submit' variant="contained" color="primary">Search</Button>
              <Button component={Link} to="/reviews" variant="contained" color="secondary">Back to Reviews</Button>
            </form>
          </div>
          <div className='found-beers row'>
            {results.map(beer =>
              <div key={beer.fields.id} className='col-3'>
                <Paper className='beer-card'>
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
                  <Button component={Link} to={{
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
                </Paper>
              </div>
            )}
          </div>
        </Fragment>
      )
    }
  }
}

export default withRouter(SearchBeers)
