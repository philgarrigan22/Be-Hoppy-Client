import React, { Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const SearchedReviewForm = (
  { beer, brewery, rating, type, loc, flavor, beerPlaceholder, breweryPlaceholder, typePlaceholder, locPlaceholder, handleChange, handleSubmit }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label htmlFor="beer">Beer Name</label>
      <input placeholder={beerPlaceholder} value={beer} name="beer" onChange={handleChange} required />

      <label htmlFor="brewery">Brewery</label>
      <input placeholder={breweryPlaceholder} value={brewery} name="brewery" onChange={handleChange} required />

      <label htmlFor="rating">Rating</label>
      <input placeholder={rating} value={rating} name="rating" onChange={handleChange} required />

      <label htmlFor="beer_type">Type</label>
      <input placeholder={typePlaceholder} value={type} name="beer_type" onChange={handleChange} required />

      <label htmlFor="location">Location</label>
      <input placeholder={locPlaceholder} value={loc} name="location" onChange={handleChange} required />

      <label htmlFor="flavor">Flavor</label>
      <input placeholder={flavor} value={flavor} name="flavor" onChange={handleChange} required />

      <Button type="submit" variant="contained" color="primary">Submit</Button>
      <Button component={Link} to="/search-beer" variant="contained" color="secondary">Cancel</Button>
    </form>
  </Fragment>
)

export default withRouter(SearchedReviewForm)
