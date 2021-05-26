# personal-archive-server

Server Code for [Personal Archive](https://personalarchive.herokuapp.com)

## Project Name & Pitch

PersonalArchive

An application used to create personal posts like a website you really liked or a coffee shop you'd like to visit again.
Built with React, Redux, MaterialUI, Express, and MongoDB

## Project Screen Shot(s)

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

### To install and run locally

You will need `node` and `npm` installed globally on your machine.  

## Server Setup

Clone down this repository

Installation:

`npm install`  

To Start Server:

`npm run dev`  

## Client Setup

Now to setup client, clone the [client repository](https://github.com/darkfusion90/personal-archive-client)

Installation:

`npm install`  

To Start Client:

`npm start`

## Reflection

- This was a side project I made to learn more about React, Express and MongoDB
- I added additonal things like email verification, password reset and multifactor authentication. These were implemented from scratch making it a very good learning experience working with expirable tokens and authentication that involved more than just usernames and passwords.
- Tools used:
  - Frontend:
    - React and MaterialUI - UI
    - Redux (using redux-toolkit) - State Management
    - Notistack - notification utility used along with MaterialUI
  - Backend:
    - Node and Express - Server setup
    - MongoDB with Mongoose ORM - Database
    - PassportJs - Basic Authentication (not multifactor)
    - Nodemailer - Sending emails
    - ejs - Email templating
    - bcrypt - Password Hashing
    - Morgan - logging
