import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { findBreweries } from '../api'
import YelpResults from './YelpResults'

import Button from '@material-ui/core/Button'

class FindBreweries extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      businesses: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    const { search } = this.state
    const { user } = this.props
    event.preventDefault()
    findBreweries(search, user)
      .then(res => this.setState({ businesses: res.data.businesses, search: '' }))
      .catch(error => {
        console.error(error)
        this.setState({ search: '' })
      })
  }

  render () {
    const { search, businesses } = this.state

    return (
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

export default withRouter(FindBreweries)
