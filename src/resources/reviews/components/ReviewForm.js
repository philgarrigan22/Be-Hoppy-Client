import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const TaskForm = (
  { beer, brewery, rating, type, location, flavor, handleChange, handleSubmit }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label htmlFor="beer">Beer Name</label>
      <input value={beer} name="beer" onChange={handleChange} />

      <label htmlFor="brewery">Brewery</label>
      <input placeholder={brewery} value={brewery} name="brewery" onChange={handleChange} />

      <label htmlFor="rating">Rating</label>
      <input placeholder={rating} value={rating} name="rating" onChange={handleChange} />

      // <label htmlFor="type">Rating</label>
      // <input placeholder={type} value={type} name="type" onChange={handleChange} />

      <label htmlFor="location">Location</label>
      <input placeholder={location} value={location} name="location" onChange={handleChange} />

      <label htmlFor="flavor">Flavor</label>
      <input placeholder={flavor} value={flavor} name="flavor" onChange={handleChange} />

      <Button type="submit" variant="primary">Submit</Button>
    </form>
  </Fragment>
)

export default withRouter(TaskForm)
