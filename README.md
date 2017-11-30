
# Repository contents
This repository taken from the full application of the [Angular Ngrx Reactive Extensions Architecture Course]

# Implementation Detail
- [DOC](https://github.com/prai-git/ngrx-reactive-App/blob/master/DOC.md)

# Installation pre-requisites

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)

# Data For the In-Memory Database

The data used in the backend can be found on this file [db-data.ts](https://raw.githubusercontent.com/angular-university/ngrx-course/master/src/server/db-data.ts).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/prai-git/ngrx-reactive-App.git
    cd ngrx-reactive-App
    
If you prefer the Yarn package manager, instead of npm install you can also run:

    yarn
    
# To Run the Chat Application Backend Server 

We can start the chat backend server with the following command:

    npm run api-server
    
This will start a server on localhost port 8090. 

# To Run the Chat Application Frontend Server 

We can start the chat  application with the following command:

    npm start OR
    ng serve --proxy-config proxy.conf.json
    
  The application is visible at port 4200 - [http://localhost:4200](http://localhost:4200)
