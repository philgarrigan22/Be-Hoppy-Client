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
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

// const authenticatedOptions = (
//   <React.Fragment>
//     <Button color="inherit" component={Link} to="/reviews">Reviews</Button>
//     <Button color="inherit" component={Link} to="/yelp-search">Find Breweries</Button>
//     <Button color="inherit" component={Link} to="/change-password">Change Password</Button>
//     <Button color="inherit" component={Link} to="/sign-out">Sign Out</Button>
//   </React.Fragment>
// )
//
// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
//     <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
//   </React.Fragment>
// )

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
        <div className="side-nav-title">
          <h1>
        Be H<img className="side-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy
          </h1>
        </div>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/II9qvVa.png"/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/reviews">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/PA9taVa.png"/>
            </ListItemIcon>
            <ListItemText primary="My Reviews" />
          </ListItem>
          <ListItem button component={Link} to="/search-beer">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/CsFbdcX.png"/>
            </ListItemIcon>
            <ListItemText primary="Search Beers" />
          </ListItem>
          <ListItem button component={Link} to="/yelp-search">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/un1f1ra.png"/>
            </ListItemIcon>
            <ListItemText primary="Find Breweries" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/change-password">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/YCZQu9I.png"/>
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
          <ListItem button component={Link} to="/sign-out">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/yRe546e.png"/>
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </div>
    )
    const unauthenticatedSideOptions = (
      <div className={classes.list}>
        <div className="side-nav-title">
          <h1>
          Be H<img className="side-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy
          </h1>
        </div>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/II9qvVa.png"/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/sign-in">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/1ItMBfx.png"/>
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button component={Link} to="/sign-up">
            <ListItemIcon>
              <img className="side-icon" src="https://i.imgur.com/oenX8nb.png"/>
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div className="main-header">
        <AppBar position="static" color="primary">
          <Toolbar>
            <div className="side-nav-toggle">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.toggleDrawer(true)}
              >  <MenuIcon />
              </IconButton>
            </div>
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
              {/* { this.props.user ? authenticatedOptions : unauthenticatedOptions } */}
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
