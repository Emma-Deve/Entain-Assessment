# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### tech skills

TypeScript, React, Redux, SASS, Axios, Eslint

### modules

```shell


             ┌── api
             ├     ├── index  request methods to fetch data from APIs
             ├     ├── path
             ├     └── request  custom packaged function with axios by adding interceptors
             ├
      src ── ├── views
             ├     └── Main
             ├
             ├
             ├── components
             ├        ├── Header
             ├        ├── Footer
             ├        ├── Container
             ├        ├── Loading
             ├        ├── RaceItem
             ├        ├── RaceList
             ├        └── index        collect all the above components
             ├
             ├── store
             ├      ├── hooks
             ├      ├── store
             ├      └── features
             ├            └── categorySlice
             ├
             ├── styles
             ├      ├── _type
             ├      ├── _variables
             ├      └── global
             ├
             ├── interfaces
             ├      ├── categories
             ├      └── nextRaces
             ├
             └── utils
                    ├── getCategoryId
                    ├── getCountDown
                    └── getTimeRemaining


```

### video

https://entain-assessment-emmali.s3.ap-southeast-2.amazonaws.com/video.mp4
