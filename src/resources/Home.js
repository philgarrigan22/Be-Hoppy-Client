import React from 'react'

const Home = ({ snackBar, user }) => (
  <div className='home-container'>
    <div className='home-content-title'>
      <h1>Welcome to Be H<img className="hop-icon" src="https://i.imgur.com/19ID0Li.png"/>ppy!</h1>
    </div>
    <div className='home-content'>
      <h2>{'Your one stop shop for keeping track of all your favorite craft beers, breweries, and everything in between!'}</h2>
      <h3>{' Take advantage of Be Hoppy\'s features:'}</h3>
      <ul>
        <li>Search for thousands of craft beers to review.</li>
        <li>Keep track of your favorite and least favorite beers.</li>
        <li>Use our review tracking system to remember which beers you want to forget, and which beers will have you coming back for more!</li>
      </ul>
    </div>
  </div>
)

export default Home
