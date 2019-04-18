import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { searchBeer } from '../api.js'

// import messages from './messages.js'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class SearchBeers extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      // beers: [],
      results: []
    }
  }

  // componentDidMount () {
  //   getBeerss()
  //     .then(res => this.setState({ beers: res.data.movies }))
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    event.preventDefault()
    const { search, results } = this.state
    const { user } = this.props
    searchBeer(search, user)
      .then(res => this.setState({ results: results.data.records, search: '' }))
      .catch(error => {
        console.error(error)
        this.setState({ search: '' })
      })
  }

  // selectBeers = (movie) => {
  //   const { alert, history } = this.props
  //
  //   if (this.state.movies.some(film => film.name === movie.original_title)) {
  //     const foundBeers = this.state.movies.find(film => film.name === movie.original_title)
  //     history.push('/movies/' + foundBeers.id)
  //   } else {
  //     const movieObj = {
  //       name: movie.original_title,
  //       release_date: movie.release_date,
  //       poster: movie.poster_path }
  //
  //     createBeers(movieObj)
  //       .then(res => history.push('/movies/' + res.data.movie.id))
  //       .catch(error => {
  //         console.error(error)
  //         this.setState({ search: '' })
  //         alert(messages.signUpFailure, 'danger')
  //       })
  //   }
  // }

  render () {
    const { results, search } = this.state

    return (
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
          <button type='submit'>Search</button>
        </form>
        <div className='found-beers row'>
          {results.map(beer =>
            <div key={beer.id} className='col-3'>
              <Paper className='beer-card'>
                <Typography component="p">
                Paper can be used to build surface or other elements for your application.
                </Typography>
                <button onClick={() => this.selectBeers(beer)}>Select</button>
              </Paper>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBeers)
