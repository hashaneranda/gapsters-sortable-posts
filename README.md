# sortable-posts

## What's inside

- [redux](https://github.com/reduxjs/redux) (state management)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) (CSS framework)
- [Axios](https://github.com/mzabriskie/axios) (a library for XMLHttpRequests)
- [Redux Saga](https://github.com/redux-saga/redux-saga/) (a redux middleware to handle data fetching)

For testing:

- [Facebook/Jest](https://facebook.github.io/jest/)
- [Testing-library/React](https://testing-library.com/docs/react-testing-library/intro)
- [Jest-dom](https://github.com/testing-library/jest-dom) (Custom jest matchers to test the state of the DOM)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/hashaneranda/gapsters-sortable-posts
cd gapsters-sortable-posts
```

Install the dependencies:

```bash
yarn install
```

### Commands

Running locally:

```bash
yarn start
```

Building the app for production:

```bash
yarn build
```

Testing:

```bash
# run all tests
yarn test

```

Note: this project is based on [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

```
src\
 |--app\            # Application main layout
 |--assets\         # Assets
 |--components\     # Compoenents
 |--config\         # Configrations of the app (Constants, Images links)
 |--saga\           # Sagas , watchers and rootSaga
 |--services\       # Services for API calls and functions
 |--store\          # Redux store, reducers and actions
 |--utils\          # Utilities and helper functions
 |--index.js        # react app - app entry point
```
