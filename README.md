# Test task for ElifTech

## Main technology stack

> ### Front-end
>
> - React with TypeScript
> - Redux with redux-thunk
> - Material-UI
> - React-hook-form

> ### Back-end
>
> - Express with TypeScript
> - Express-validator
> - MongoDB

## Project setup instruction for local running

> - Clone this repository to your PC
> - Check if on your PC is installed Node.js v12.5 + and npm v6.4+ and MongoDB Compass or you can connection to DB with https://www.mongodb.com/cloud/atlas
> - Now you need to install npm modules for a server and a client side

> > - **_Server side_**
> > - Open a root folder where you cloned this project navigate to the folder `server => src => config`
> > - At this folder (config) create file with next name: .env.development
> > - Open this file (.env.development) and write:
> > - **_SERVER_PORT = 5003_**
> > - **_MONGODB_URI = your-string-for-connection-to-mongoDB_**
> > - Open new terminal in a root folder where you cloned this project and write
> > - cd server
> > - npm install
> > - npm run start:dev
> > - don't closing terminal

> > - **_Client side_**
> > - Open new terminal in a root folder where you cloned this project and write
> > - cd client
> > - npm install
> > - npm run start
> > - open your browser and past this path: http://localhost:3000/calculator
> > - don't closing terminal
