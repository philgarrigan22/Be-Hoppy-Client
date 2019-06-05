import React from 'react'

const Home = ({ snackBar, user }) => (
  <div className='home-container'>
    <div className='home-content'>
      <h1>Welcome to Be H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy!</h1>
    </div>
    <div className='home-content'>
      <h3>The one stop shop for keeping track of all your favorite craft beers</h3>
      <h2>Search or thousands of craft beers to review</h2>
      <h2>Keep track of your favorite and least favorite beers.</h2>
      <p>Use our review tracking system to remember which beers you want to forget, and which beers will have you coming back for more!</p>
      <h2></h2>
    </div>
  </div>
)

export default Home
