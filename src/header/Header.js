import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header/Header.scss'
import SideNav from './SideNav'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '@material-ui/core/Icon'

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
    <Button color="inherit" component={Link} to="/">
      <Icon>home</Icon>
    </Button>
  </React.Fragment>
)

const Header = ({ user }) => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <SideNav />
        <div className="nav-title">
          <h1>
            Be H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy
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
