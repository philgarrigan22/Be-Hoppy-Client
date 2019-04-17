import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const ReviewForm = (
  { beer, brewery, rating, type, loc, flavor, handleChange, handleSubmit }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label htmlFor="beer">Beer Name</label>
      <input placeholder={beer} value={beer} name="beer" onChange={handleChange} required />

      <label htmlFor="brewery">Brewery</label>
      <input placeholder={brewery} value={brewery} name="brewery" onChange={handleChange} required />

      <label htmlFor="rating">Rating</label>
      <input placeholder={rating} value={rating} name="rating" onChange={handleChange} required />

      <label htmlFor="beer_type">Type</label>
      <input placeholder={type} value={type} name="beer_type" onChange={handleChange} />

      <label htmlFor="location">Location</label>
      <input placeholder={loc} value={loc} name="location" onChange={handleChange} required />

      <label htmlFor="flavor">Flavor</label>
      <input placeholder={flavor} value={flavor} name="flavor" onChange={handleChange} />

      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  </Fragment>
)

export default withRouter(ReviewForm)
