# Nodejs backend with Express and MongoDB

## Description

Generate API and user authentication

- Post CRUD
- create new user and use the token of response to call post's apis

## Requirement

**Create .env file in your root directory**

MONGODB_USER = **db username**

MONGODB_PASSWORD = **db password**

MONGODB_DATABASE = **db name**

MONGODB_LOCAL_PORT = **db local port**

MONGODB_DOCKER_PORT = **db docker port**

NODE_LOCAL_PORT = **your local port**

NODE_DOCKER_PORT = **your docker port**

NODE_TOKEN_SECRET = **token secret key**

NODE_UPLOAD_DIR = **upload file director**

## Installation

```bash
$ npm install
```

## Running seeder file

```bash
# save 100 posts to your databse
$ npm run seed
```

## Running the app

```bash
# development
$ npm run dev

## production mode
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test
```
