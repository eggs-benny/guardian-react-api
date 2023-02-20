# Guardian React API

<!-- [![CircleCI](https://circleci.com/gh/BenSheridanEdwards/COVID-19_Tracker_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/COVID-19_Tracker_React) -->

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

This is a useful 1 page site built with React Hooks.

It leverages the Guardian's OpenPlatform API to fetch the most up-to-date Guardian headlines when you click the refresh button.

The website is intended to be used to refresh the feed of the most up-to-date articles, and also to search for specific types of articles too.

React was used to allow for easy container creation, allowing for the housing of articles within the feed, and the feed and search bar within the main app, making it easily amendable.

**Tech Stack:** *JavaScript, React, Node, CSS, Jest*

You can use the app [here](https://guardian-react-api.vercel.app/)

## <a name="user-stories">User Stories</a>
```
As a busy news consumer
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy news consumer
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy news consumer
So I can get a few more details about an important story
I can click a news article title which links to the original article
```

```
As a busy news consumer
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```

<!-- ```
As a busy news consumer
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
```

To get a summary of an article's content, you'll need to use the [Aylien API
endpoint](https://docs.aylien.com/textapi/endpoints/#summarization), which means
integrating and calling another HTTP endpoint from a different API. This mean you'll need
to first fetch articles from the Guardian API, **then** use the Aylien API to summarise
the content — you'll need to use promises or callbacks to call both APIs and to handle the flow of
control. -->

```
As a busy news consumer
Just in case my laptop breaks
I can read the site comfortably on my phone
```

<!-- ```
As a busy news consumer
So I make my news reading more fun
I can see whizzy animations in the app
``` -->

## <a name="mockups">Mockups</a>

When the user first loads the app, they'll see two buttons and an empty feed:

<!-- <img src="https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppMockup-LineGraph.png" width="600" /> -->

Upon selecting 'refresh headlines', they'll see the 10 newest headlines in a scrollable inset feed. A similar feed will be shown, but only featuring searched-for items when 'search headlines' is clicked.

<!-- <img src="https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppMockup-BarGraph.png" width="600" /> -->

## <a name="app-showcase">App Showcase</a>

See the initial loadout, and a demo of the headlines once searched for:

<!-- ![App Screenrecording](https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppShowcase-COVID-19-Tracker.gif) -->

### <a name="features">Features</a>

- On visiting the [site](https://guardian-react-api.vercel.app/), start by clicking the 'refresh feed' button, which will generate the most up-to-date stories. You can repeat this action later to see if any new stories have been published.

- Alternatively you can type in a search query to see if the Guardian has any stories on this topic. For some (hopefully!) contrasting stories you could try 'Rishi Sunak' then 'Arsenal'.


### <a name="improvements">Improvements & Bugs</a>

#### Improvements

- Upon clicking the headline, instead of taking you off-site, add a React container that shows a summarisation of the article. Take user off-site if they click the image instead.
- Neaten up UX for mobile
- Align the news feed to the centre of the page
- Add gif functionality

#### Bugs

- No user feedback if search button is clicked without a search term, user may think the link is broken.


## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:eggs-benny/guardian-react-api.git
$ cd guardian-react-api
```

### Launching the App from the Command Line

From inside the React project, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the React project, you can run `npm test` in the terminal to run the test suite. 

```
$ npm test
```

<!-- ### Seeing Test Coverage

From inside the React project, you can run 'yarn test -- --coverage' in the terminal to see the code coverage for this project.

```
$ yarn test -- --coverage
``` -->

## <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/).  -->

<!-- This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality. -->