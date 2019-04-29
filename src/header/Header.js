import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/header/Header.scss'
// import SideNav from './SideNav'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

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

const styles = {
  list: {
    width: 300
  }
}

// const Header = ({ user }) => (
//   <div>
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <div className="nav-title">
//           <h1>
//             Be H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy
//           </h1>
//         </div>
//         <div className="nav-btns">
//           { user && <span></span>}
//           { user ? authenticatedOptions : unauthenticatedOptions }
//           { alwaysOptions }
//         </div>
//       </Toolbar>
//     </AppBar>
//   </div>
// )

class Header extends Component {
  constructor () {
    super()

    this.state = {
      open: false
    }
  }

  toggleDrawer = (toggle) => () => {
    this.setState({
      open: toggle
    })
  }

  render () {
    const { classes } = this.props

    const authenticatedSideOptions = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/change-password">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
          <ListItem button component={Link} to="/sign-out">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </div>
    )
    const unauthenticatedSideOptions = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/sign-in">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button component={Link} to="/sign-up">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer(true)}
            >  <MenuIcon />
            </IconButton>
            <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
              >
                { this.props.user ? authenticatedSideOptions : unauthenticatedSideOptions }
              </div>
            </Drawer>
            <div className="nav-title">
              <h1>
                Be H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy
              </h1>
            </div>
            <div className="nav-btns">
              { this.props.user ? authenticatedOptions : unauthenticatedOptions }
              { alwaysOptions }
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)

// export default Header
