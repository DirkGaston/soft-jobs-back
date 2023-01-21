# Soft Jobs

![GitHub repo size](https://img.shields.io/github/repo-size/DirkGaston/soft-jobs)
![GitHub stars](https://img.shields.io/github/stars/DirkGaston/soft-jobs?style=social)
![GitHub forks](https://img.shields.io/github/forks/DirkGaston/soft-jobs?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/DirkGrave?style=social)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)

**Soft Jobs** is a platform that aims to help Junior developers get freelance jobs in order to gain experience.

_This project was developed as the **JWT User Authentication and Authorization** assignment in the **Backend with Node and Express** course for Desafio LATAM's **Full Stack with JavaScript** bootcamp_

## Assignment Background 📖

The company Soft Jobs has initiated the development of a platform that seeks to support the junior developer community to get short and simple jobs to accumulate work experience and improve their opportunities.

In this challenge you will be a backend developer of the company and you will have to create a server for user authentication and authorization using JWT.

You will have to use a client application developed with React ready to consume the routes from your server.

A few images of the client side application:

![](https://i.imgur.com/FwsiYqs.png) <br> <br>
![](https://i.imgur.com/9RJ9Tpa.png) <br> <br>
![](https://i.imgur.com/TmppXeZ.png) <br> <br>
![](https://i.imgur.com/g1KMlES.png) <br> <br>

The server will need to:

● Allow registration of new users through a POST /users path. <br>
● Provide the POST /login route that receives a user's credentials and returns a
token generated with JWT. The token payload must include the email of the registered user. <br>
● Provide a GET /users path to return a user's data in case he/she is authenticated.
In order to do this: <br>
○ Extract a token available in the Authorization property of the headers. <br>
○ Verify the validity of the token using the same secret key used in your signature. <br>
○ Decode the token to get the user's email to look up in your payload. <br>
○ Obtain and return the user's record. <br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Tools 🛠️

**Soft Jobs** is a backend implementation that was built over an existing pre-defined REACT frontend using:

- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [JavaScript](https://devdocs.io/javascript/)
- [Node.JS](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/en/5x/api.html)

## Dependencies 🚧

Used dependencies include:

- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module to manage environment variables.
- [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Automatically restarting the node application when file changes in the directory are detected.
- [UUID](https://www.npmjs.com/package/uuid) - Generating unique IDs for each song
- [Yup](https://www.npmjs.com/package/yup) - Schema builder for server-side data validation

## Contact 📫

If you want to contact me you can reach me at <dirkgaston87@gmail.com>.
