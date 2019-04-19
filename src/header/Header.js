import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header/Header.scss'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const authenticatedOptions = (
  <React.Fragment>
    <Button color="inherit" component={Link} to="/reviews">Reviews</Button>
    <Button color="inherit" component={Link} to="/yelp-search">Find Breweries</Button>
    <Button color="inherit" component={Link} to="/change-password">Change Password</Button>
    <Button color="inherit" component={Link} to="/sign-out">Sign Out</Button>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
    <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Button color="inherit" component={Link} to="/">Home</Button>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header>
    <div className="main-header">
      <div className="nav-title">
        <Typography variant="h3" color="inherit">
            Be Hoppy
        </Typography>
      </div>
      <div className="nav-btns">
        { user && <span>Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
        { alwaysOptions }
      </div>
    </div>
  </header>
)

export default Header
