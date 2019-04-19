import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const YelpResults = ({ name, imageUrl, isClosed, url, reviewCount, rating, displayAddress, displayPhone }) => (
  <div className='yelp-card'>
    <Card>
      <CardActionArea>
        <img className='yelp-card-img' src={imageUrl} alt={`${name} yelp image`}/>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography component="p">
          {name} has {reviewCount} reviews on Yelp.
        </Typography>
        <Typography component="p">
            Brewery Address: {displayAddress[0]} {displayAddress[1]}
        </Typography>
        <Typography component="p">
            Brewery Phone Number: {displayPhone}
        </Typography>

      </CardContent>
    </Card>
  </div>
)

export default YelpResults
