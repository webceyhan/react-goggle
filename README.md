<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/react-goggle/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/react-goggle/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/webceyhan/react-goggle/actions/workflows/netlify-deploy.yml/badge.svg)](https://github.com/webceyhan/react-goggle/actions/workflows/netlify-deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e28e4e68-5bab-4837-9f4e-4550d48ef5b6/deploy-status)](https://app.netlify.com/sites/react-goggle-app/deploys)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Google Search Clone + React + TailwindCSS

A Google search clone inspired by a tutorial to demonstrate the basics of React framework and its core concepts.

It utilizes the [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [React Router](https://reacttraining.com/react-router/web/api/BrowserRouter) to create a simple search application based on the data which is provided by RapidAPI. And the search results are displayed using Tailwind CSS.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[View Demo](https://webceyhan-react-goggle.netlify.app/) |
[Report Issue](https://github.com/webceyhan/react-goggle/issues) |
[Request Feature](https://github.com/webceyhan/react-goggle/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/react-goggle.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd react-goggle
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Run the app in the development mode.

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

<br>
<!-- TESTING ///////////////////////////////////////////////////////////// -->

## Testing

Launche the test runner in the interactive watch mode.

```sh
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br>
<!-- BUILDING //////////////////////////////////////////////////////////// -->

## Building

Build the app for production to the `build` folder.

```sh
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

You can also preview the built application locally as follows:

```sh
npm install -g serve # if not installed yet
serve -s build
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (Netlify)

A GitHub Action will automatically deploy the project to Netlify on every push.

> See the details in [.github/workflows/netlify-deploy.yml](./.github/workflows/netlify-deploy.yml)

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [React](https://reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [RapidAPI](https://rapidapi.com/)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Netlify](https://www.netlify.com/)
    -   [Netlify Actions](https://github.com/nwtgck/actions-netlify)
-   [Build and Deploy Google Search 2.0 with React & Tailwind CSS](https://www.youtube.com/watch?v=NDbruK1fzG8&t=1743s)
