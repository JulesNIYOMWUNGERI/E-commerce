# Team-Furebo-E-commerce-bn

[![Maintainability](https://api.codeclimate.com/v1/badges/7322a671c14645284094/maintainability)](https://codeclimate.com/github/atlp-rwanda/Team-furebo-E-commerce-bn/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7322a671c14645284094/test_coverage)](https://codeclimate.com/github/atlp-rwanda/Team-furebo-E-commerce-bn/test_coverage)

[![Coverage Status](https://coveralls.io/repos/github/atlp-rwanda/Team-furebo-E-commerce-bn/badge.svg?branch=develop)](https://coveralls.io/github/atlp-rwanda/Team-furebo-E-commerce-bn?branch=develop)

[![atlp-rwanda](https://circleci.com/gh/atlp-rwanda/Team-furebo-E-commerce-bn.svg?style=svg)](https://app.circleci.com/pipelines/github/atlp-rwanda)

[![](https://img.shields.io/badge/Checked_by-Hound-a873d1.svg)](https://houndci.com)

## Introduction

This is an e-commerce application . Through this app users: Sellers will be able to post, update, delete products which will be accessible to a database of users: Clients that can browse and buy from the collections posted by the sellers.

## Index

-   [Usage](#usage)
    -   [Installation](#installation)
    -   [Run app in Docker](#docker)
    -   [Documentation](#documentation)
-   [Development](#development)
    -   [Pre-requisites](#pre-requisites)
    -   [File Structure](#structure)
-   [community](#community)
    -   [Contribution](#contribution)
    -   [Branches](#branches)
-   [License](#license)

## Index

## Usage <a name="usage"></a>

### Installation <a name="installation"></a>

-   install [Docker](https://www.docker.com) and docker-compose if you want to run the app in docker. <span style="color: blue">In some cases you can skip this.</span>
-   clone the project `git clone `;
-   go into the root directory of the cloned project
-   run `npm install` in order to install dependencies which are listed in `package.json`
-   create `.env` file into the root directory
-   copy and paste the content `.env.example` into .env, set the appropriate PORT and other listed environment variables
-   run `npm run dev ` for development
-   you will be able to access the project on your local machine using url: `127.0.0.1:$port`

#### Run app in Docker <a name="docker"></a>

To run the app in [Docker](https://www.docker.com) You should first install docker as instructed in the installations needed.

-   run npm run docker-compose up : To build and start app in Docker

`Other instructions about docker will be mentioned soon`

### Documentation <a name="documentation"></a>

Navigate to`127.0.0.1:$port`/api-docs on your browser. The swagger documentations on the page will give you an overview of the app functionalities.

## Development <a name="development"></a>

-   For development, pull the project to your own repo

### Pre-Requisites <a name="pre-requisites"></a>

-   Node.js version 18.x
-   Docker
-   Postgres Database
-   `others will be mentioned later`

### File Structure <a name="structure"> </a>

-   `.circleci` This folder contains the configuration file for the integration of all the testing webhooks that verify any pushed code to develop. I.e. CircleCI, Coveralls, CodeClimate.
-   `src:` This folder contains all the source code of the application.
    -- `api:` This folder contains all the API routes.
    -- `config:` This folder contains configuration files for the application.
    -- `controllers:` This folder contains the business logic of the application.
    -- `models:` This folder contains the data models of the application.
    -- `middlewares:` This folder contains all the middleware functions for the application.
    -- `migration:` This folder contains table schema for the database.
    -- `seeders:` This folder contains sample data for tables exist in the database.
    -- `.env.example:` This file contain sample data for .env file.
    -- `.sequelizerc:` This file contains configuration of database components.
    -- `utils:` This folder contains all the utility functions for the application.
    -- `docs:` This folder contains all the documentation files for the application.
-   `package.json:` This file contains the metadata of the application and its dependencies.
-   `README.md:` This file contains the documentation of the application.

## Community <a name="community"></a>

### Contribution <a name="contribution"> </a>

In case you wish to contribute, raise a discussion first about what you would like to change. Before making any changes, create a sub-branch from develop and push on that specific branch. Follow the instructions in the [engineering playbook](https://github.com/atlp-rwanda/engineering-playbook/wiki/), to ensure homogeneous formatting.

### Branches <a name="branches"> </a>

-   main
-   develop
-   ch-Integrate-CircleCI-with-badge
-   ch-codeclimate-code-coverage
-   ft-login-api-endpoint
-   ft-app-logout
-   ft-Two-Factor-Authentication-184651335

## License
