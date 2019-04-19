import React, { Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import '../../../css/reviews/ReviewForm.scss'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'

const ReviewForm = (
  { beer, brewery, rating, type, loc, flavor, handleChange, handleSubmit }) => (
  <Fragment>
    <CssBaseline />
    <h2>Craft Your Own Hoppinions</h2>

    <form className="form" onSubmit={handleSubmit}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="beer"
            label="Beer Name"
            name="beer"
            value={beer}
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="brewery"
            label="Brewery"
            name="brewery"
            value={brewery}
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="rating"
            label="Rating (1-10)"
            name="rating"
            value={rating}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="beer_type"
            label="Beer Type"
            name="beer_type"
            value={type}
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            value={loc}
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="flavor"
            label="Flavor"
            name="flavor"
            value={flavor}
            type="text"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <div className="create-btn-submit">
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
      </div>
      <div className="create-btn-submit">
        <Button component={Link} to="/reviews" variant="contained" color="secondary" fullWidth>Cancel</Button>
      </div>
      <div className="create-btn-submit">
        <Button component={Link} to="/search-beer" variant="contained" color="secondary" fullWidth>Search for beer</Button>
      </div>
    </form>
  </Fragment>
)

export default withRouter(ReviewForm)
