# Nodejs backend with Express and MongoDB

## Description

Generate API and user authentication

- Post CRUD
- create new user and use the token of response to call post's apis

## Requirement

**Create .env file in your root directory**
PORT = <your port>
DB_HOST = <db host>
DB_PORT = <db port>
DB_USER = <db username>
DB_PASSWORD = <db password>
DB_NAME = <db name>
TOKEN_SECRET = <token secret key>
UPLOAD_DIR = <upload file director>

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
