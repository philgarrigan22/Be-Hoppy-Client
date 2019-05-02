import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.scss'
import 'typeface-roboto'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

const appJsx = (
  <HashRouter>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
