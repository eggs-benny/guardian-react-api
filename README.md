# Guardian React API
Click [here](https://guardian-react-api.vercel.app/) to check out the site (try it on mobile too!)

About
This is a useful 1 page site built with react and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It leverages the Guardian's OpenPlatform API to pull the most up-to-date Guardian headlines when you hit the refresh button.
The webiste is intended to be used to refresh the feed of the most up-to-date articles, and also to search for specific types of articles too.
React was used to allow for easy module creation, allowing for the housing of articles within the feed, and the feed and search bar within the main app, making it easily amendable.

Technologies used

#### Testing

#### Styling

#### Linting

#### Planning

#### Deployment
This site was deployed using Vercel as it is a free and easy to use deployment partner.

Input Handling

Usage
On visiting the [site](https://guardian-react-api.vercel.app/), start by clicking the 'refresh feed' button, which will generate the most up-to-date stories. You can repeat this action later to see if any new stories have been published.

Alternatively you can type in a search query to see if the Guardian has any stories on this topic. For some (hopefully!) contrasting stories you could try 'Rishi Sunak' then 'Arsenal'.


Development
Planning:
(image of planning)

Tests:


How to build the environment:
Initialize app:
npx create-react-app

dependencies
[eg] npm i sass jest cypress

You will need to get an api key from the Guardian:
And save it to a file called [./src/util/apiKey.js] in this format


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

