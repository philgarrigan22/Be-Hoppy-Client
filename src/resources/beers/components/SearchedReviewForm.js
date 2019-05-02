import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import '../../../css/reviews/ReviewForm.scss'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

const SearchedReviewForm = (
  { beer, brewery, rating, type, loc, flavor, beerPlaceholder, breweryPlaceholder, typePlaceholder, locPlaceholder, handleChange, handleSubmit }) => (
  <div className="review-form-container">
    <Paper>
      <CssBaseline />
      <div className="review-form">
        <h1>Craft Your Own H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppinions</h1>

        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="beer"
                label={beerPlaceholder}
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
                label={breweryPlaceholder}
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
                label="Rating"
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
                label={typePlaceholder}
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
                label={locPlaceholder}
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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} sm={5}>
              <div className="create-btn-submit">
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </div>
            </Grid>
            <Grid item xs={10} sm={5}>
              <div className="create-btn-submit">
                <Button component={Link} to="/search-beer" variant="contained" color="secondary" fullWidth>Cancel</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  </div>
)

export default withRouter(SearchedReviewForm)
