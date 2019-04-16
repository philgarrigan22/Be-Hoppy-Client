import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../api'
import messages from '../messages'

class SignOut extends Component {
  componentDidMount () {
    const { snackBar, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => snackBar(messages.signOutSuccess, 'info'))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
