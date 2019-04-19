# Be Hoppy | Craft Your Hoppinions

## Related Links
- Link to deployed site: https://philgarrigan22.github.io/Be-Hoppy-Client/
- Link to the API repository: https://github.com/philgarrigan22/Be-Hoppy
- Link to the deployed API: https://be-hoppy.herokuapp.com/

## What it is and how it works
Be Hoppy is a single page application where users can review craft beers. After sign in, user's have access to
all of their past beer reviews. User's can choose to create new reviews by searching for a specific beer, using
the Open Beer Database (a third-party API) or by simply inputting all of the beer review information themselves.
In addition to beer reviews, a signed in user can also search for breweries in their hometown and all around the
world. The search is powered by a third-party API provided by Yelp, utilizing the business search feature. The
back-end was built using a combination of Ruby, Rails, and PostgreSQL. The front-end was built using React.js,
utilizing Axios for http requests to communicate with the API.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Sass (SCSS)
- Material UI
- Axios
- API (link to repo above)
- Git

## Setup and Installation
1. Fork and clone this repository.
2. Install dependencies using `npm install`.
3. Git add and git commit your initial changes.
4. View changes live by running local server `npm start`.

## Planning, Process, and Problem-solving Strategy
I approached this project with a mindset of constantly making small changes and immediately testing those changes.
My first order of action was to ensure that all authorization actions were properly working, before creating any
resources to CRUD. Once authorization was all set, I focused on working from my APP component, creating any necessary
routes, and slowly working my way down to each separate component level. As I added resources and components, I
constantly checked and tested to ensure that my components were operating appropriately, before making any further
changes. I separated the authorization, reviews, beer search, and brewery search features and did my best to keep
each feature uniform with the others in regards to structure. I focused on functionality first and once I felt that
I was happy with the amount of user features, I then shifted my focus to styling (only after functionality was solid).
I utilized console logs and the React inspection chrome extension to drill into any issues that I ran into.

## Unsolved Problems / Future Iterations
I initially planned on utilizing the Untappd API for my beer search functionality. However, this required applying to
be approved for a developer API access token. This process was longer than the amount of time that was available to
me to work on this project. Upon acceptance and receival of a developer API access token, I would like to swap out
the Open Beer Database third-party API with the Untappd API, as I believe that the beer data is far more robust in
regards to Craft Beer. Another problem that I did not have enough time to implement is being able to search for a
beer, select that beer, and utilize selective data from the third-party API response to pre-populate some of the
beer review form and edit accordingly. Additionally, I would like to add a wishlist feature. I would first add this
to my back-end and then build out the feature to my front-end.

## Wireframes and User Stories

#### Wireframes
- [Link to Wireframes](https://imgur.com/0ggVvvC)
- [Link to Wireframes](https://imgur.com/X4QCTSd)

#### User Stories
* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I would like to create a beer review.
* As a signed in user, I would like to edit my previous beer reviews.
* As a signed in user, I would like to delete beer reviews.

Stretch goal user stories:
* As a signed in user, I would like to add a beer to my wish list of beers to try.
* As a signed in user, I would like to move a beer from my wish list to my reviewed beers.
* As a signed in user, I would like to search for a specific beer.
* As a signed in user, I would like to search for a specific brewery.
* As a signed in user, I would like to search for and add the location of where I tried / bought a beer that I review.

![Screenshot of Be Hoppy](https://i.imgur.com/Awd89hX.png)
