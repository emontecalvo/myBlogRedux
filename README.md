
#My Blog Redux#

A full-stack React app - *with Redux* - with the basic CRUD operations working.

This was designed as a comparison to my project My Blog, a full-stack React app without Redux (https://github.com/emontecalvo/myBlog).

![Alt text](./blog_pure_react.png?raw=true "My Blog - Pure React")
![Alt text](./blog_redux.png?raw=true "My Blog with Redux")


###Setup Instructions:

* To use this application, simply clone or download the repository.

* Make sure you have Node.js installed (https://nodejs.org/en/).

* Make sure you have Mongodb installed (https://www.mongodb.com).

* cd into the project folder.

* In the command line run: $npm install

* Next, in the command line run: $npm run build

* Third, launch Mongodb (usually by typing $mongod in the terminal).

* Then, in the command line run: $npm run watch (to track code changes in development mode) or run $npm start and leave the code alone.

* Go to the localhost 8080 on your web browser and you should see *My Blog Redux* running!

### Live Site
* coming soon


###Technologies (Quick Overview)
* Node.js
* React
* Redux
* HTML
* CSS
* MongoDB
* Express
* Webpack

###Origin
* A lack of simple CRUD application information with the MERN stack was what inspired this project.  This project is as much about the technologies and dependencies used as it is about the technologies and dependencies *not* used.

###Functionality and Technology
* MERN stack (MongoDB, Express, React, Node).
* This app was built to be responsive across multiple web-browsers and multiple sizes *without* using media searches in the CSS.
* The front-end was built with React and Redux.
* The database was built using Mongodb and Express.
* Routing was achieved *without* using React-router in order to better gain an appreciation of the problem React-router was trying to solve.
* Adding Redux to this project after it had already been built with pure-React was welcome because a full appreciation of the problems Redux was trying to solve had been reached (please see the pure-React original at: https://github.com/emontecalvo/myBlog ).

##### Directory layout

```

├── client      Client-side code
├── models      Database models
└── server.js   Server-side code

```

### Development Roadmap
Plans to add to this blog at a later date are below:

* Add authentication
  * Authentication without React-router
  * Authentication with React-router
* Allow users to change their background


