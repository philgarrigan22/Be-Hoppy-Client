import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../api'
import messages from '../messages'
import '../../css/auth/AuthForms.scss'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { snackBar, history, user } = this.props

    changePassword(this.state, user)
      .then(() => snackBar(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ oldPassword: '', newPassword: '' })
        snackBar(messages.changePasswordFailure, 'error')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <Fragment>
        <div className="auth-form">
          <Paper>
            <CssBaseline />
            <div className="auth-style">
              <Avatar className="avatar">
                <img className="side-icon" src="https://i.imgur.com/YCZQu9I.png"/>
              </Avatar>
              <Typography component="h1" variant="h5">
                Change Password
              </Typography>
              <form className="form" onSubmit={this.onChangePassword}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="oldPassword"
                      label="Old Password"
                      name="oldPassword"
                      value={oldPassword}
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      label="New Password"
                      name="newPassword"
                      value={newPassword}
                      type="password"
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
                    Change Password
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ChangePassword)
