import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'
import '../../css/auth/AuthForms.scss'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { snackBar, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => snackBar(messages.signUpSuccess, 'success'))
      .then(() => history.push('/reviews'))
      .catch(() => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        snackBar(messages.signUpFailure, 'error')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Fragment>
        <div className="auth-form">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
          Sign up
            </Typography>
            <form className="form" onSubmit={this.onSignUp}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="email"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <div className="auth-btn-submit">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                Sign Up
                </Button>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/sign-in" variant="body2">
                  Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(SignUp)
