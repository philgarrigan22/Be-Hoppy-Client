import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Reviews from './resources/reviews/components/Reviews'

// import Alert from 'react-bootstrap/Alert'
import { withSnackbar, SnackbarProvider } from 'notistack'
import Button from '@material-ui/core/Button'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  snackBar = (message, type) => {
    this.props.enqueueSnackbar(message, {
      variant: type,
      action: (
        <Button size="small">{'Dismiss'}</Button>
      )
    })
  }

  render () {
    const { user } = this.state

    return (
      <React.Fragment>
        <SnackbarProvider maxSnack={4}>
          <Header user={user} />

          {/* Authorization Routes */}
          <Route path='/sign-up' render={() => (
            <SignUp snackBar={this.snackBar} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn snackBar={this.snackBar} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut snackBar={this.snackBar} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword snackBar={this.snackBar} user={user} />
          )} />

          {/* Resource Routes */}
          <AuthenticatedRoute user={user} exact path='/reviews' render={() => (
            <Reviews snackBar={this.snackBar} user={user} />
          )} />

        </SnackbarProvider>
      </React.Fragment>
    )
  }
}

export default withSnackbar(App)
