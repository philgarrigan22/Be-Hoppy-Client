import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header/Header.scss'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

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
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <div className="nav-title">
          <h1>
            BE H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>PPY
          </h1>
        </div>
        <div className="nav-btns">
          { user && <span></span>}
          { user ? authenticatedOptions : unauthenticatedOptions }
          { alwaysOptions }
        </div>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
