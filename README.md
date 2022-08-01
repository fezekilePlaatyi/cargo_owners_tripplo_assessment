## Introduction

This repository contains a Frontend/Client for the Cargo Owners' app. It allows an person to login and add Transport routes. While adding transport route it is required that a user enter following information:-
1. Email(this is drivers email)
2. The route origin
3. The route destination
3. And then then Rate.

On home page it has Transport rates and also has tab where a user can see an Average rates for each unique route.

## About App

The app is created using React.js with typescript. For state management, it uses [Redux]()

## Configurations

The config.json file needs to be updated with the endpoint for auth as well as the secure api endpoint. These both can be found on after Stack creation. As below:-
`{
  "PORT": 8081,
  "AUTH_API_URL": "<endpoint for login>/Prod/login",
  "SECURED_API_URL": "<the secured api URL>/Prod"
}`


A user who adds the routes rates needs to be created on AWS Cognito and with the following to set the password using AWS CLI commands. This is to avoid having to create new password on initial login.
```bash
aws cognito-idp admin-set-user-password  --user-pool-id <your-user-pool-id>  --username <username> --password <password>  --permanent
```

After above command succeeds the you can follow below instructions to run the app.


## Available Scripts## Introduction

This repository contains a Frontend/Client for the Cargo Owners' app. It allows a person to log in and add Transport routes. While adding a transport route it is required that a user enter the following information:-
1. Email(this is the driver's email)
2. The route origin
3. The route destination
3. And then the Rate.

On the home page, it has Transport rates and also has a tab where a user can see Average rates for each unique route.

## About App

The app is created using React.js with typescript. For state management, it uses [Redux]()

## Configurations

The config.json file needs to be updated with the endpoint for auth as well as the secure API endpoint. These both can be found after Stack's creation. As below:-
`{
  "PORT": 8081,
  "AUTH_API_URL": "<endpoint for login>/Prod/login",
  "SECURED_API_URL": "<the secured api URL>/Prod"
}`


A user who adds the routes rates needs to be created on AWS Cognito and with the following to set the password using AWS CLI commands. This is to avoid having to create new password on initial login.
```bash
aws cognito-idp admin-set-user-password  --user-pool-id <your-user-pool-id>  --username <username> --password <password>  --permanent
```

After above command succeeds the you can follow below instructions to run the app.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Hosting
The client is built and deployed in the Amazon S3 bucket, so users can access it over the internet. The deployment pipeline is managed at AWS CodePipeline which with webhooks gets notified to deploy/redeploy in each change detected.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Hosting
The client is built and deployed in the Amazon S3 bucket, so users can access it over the internet. The deployment pipeline is managed at AWS CodePipeline which with webhooks gets notified to deploy/redeploy in each change detected.
