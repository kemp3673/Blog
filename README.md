<div align="center">
  <h1>Personal Portfolio and Blog</h1>
  <br/>
  <h3>Tech Stack</h3>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

  <br/>
  <h3> Minimalistic Landing Page</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/99e4030d-93e9-45a3-a080-123b5c5ef3c4" height="400"/>
  <h3>Blog Component</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/333cc473-09f1-4a9a-b3c7-655cac8cdaf7" height="400"/>
  <h3>Selected Blog Entry</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/8e3c29f1-e6a8-4251-a546-10bffd67c14d" height="400"/>
  <h3>Edit/Create Blog Entries</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/254f50de-0e65-4c25-803d-9d09c781b472" height="400"/>
  <h3>About Me</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/6ea85fd1-433e-4302-ad54-a617fea97d7f" height="400"/>
  <h3>Previous Projects</h3>
  <img src="https://github.com/kemp3673/Blog/assets/102747919/c3e7bf7a-6935-4bc2-a15a-ef966b64ee8d" height="400"/>
</div>

## Available Scripts

## In the CLIENT directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

## In the API directory, you can run:

### `npm start`

Runs the server with nodemon. Server will restart on any changes made to the server files.

Server will run on port 3000 by default and can be changed in the .env file.

Serves up the static files from the CLIENT/build folder which are created when running the npm run build command in the CLIENT directory.

Additionally the server is the API for the client and will handle all requests to the database.

## Mysql

#### AWS EC2

1. Install MySQL Server:

```sh
sudo apt update
sudo apt install mysql-server
```

2. Start MySQL Service:

```sh
sudo systemctl start mysql
```

3. Secure MySQL Installation: Perform some initial security configurations

```sh
sudo mysql_secure_installation
```

4. Configure MySQL to Start on Boot:

```sh
sudo systemctl enable mysql
```

5. Access MySQL:

```sh
mysql -u root -p
```

6. Run Schema.sql to create database and tables

```sh
mysql -u root -p < schema.sql

NOTE: If you run this on a windows machine
mysql -u root -p --execute="source schema.sql"

```

# API Endpoints

### /resume

- GET
  - Get resume pdf

### /api/blogs

- #### GET

  - Retrieve 10 entry blogs (most recent)
  - query: {"page": number} (optional)

### /api/blogs/:id

- #### GET
  - Retrieve full blog details by blog id
  - path variable: {"id": number}

### /api/blogs/count

- #### GET
  - Retrieve count of total blog entries

### /api/user/:id

- #### GET
  - Get user details by user id (return only name and img) to be used with blog entries
  - path variables: {"id": number}

### /api/projects

- #### GET
  - Get all projects

### /api/projects/:id

- #### GET
  - Get project details by project id
  - path variables: {"id": number}

### /api/user/login

- #### POST
  - Log user in and create JWT
  - query: {
    - "email": string (max length 255),
    - "password": string (max length 255)
      - password verified with bcrypt
  - }

# Authenticated Routes - JWT Required for all

### /resume

- #### POST

  - Upload resume pdf (will replace existing resume)
  - query: {"resume": file} (pdf only)

### /api/auth/blogs/write

- #### POST
  - Create a new blog entry
  - query: {
    - "title": string (max length 255),
    - "description": string (max length 1000),
    - "content": string (no char limit),
    - "main_image": file,
    - "user_id": number
  - }

### /api/auth/blogs/:id

- #### DELETE

  - Delete blog entry by id
  - path variable: {"id": number}

- #### PATCH
  - Update existing entry by id
  - path variable: {"id": number}
  - query (all fields optional): {
    - "title": string (max length 255),
    - "description": string (max length 1000),
    - "content": string (no char limit),
    - "main_image": file,
    - "user_id": number
    - }

### /api/auth/user/update

- #### PATCH
  - Update user details
  - query (all fields optional): {
    - "name": string (max length 255),
    - "email": string (max length 255),
    - "password": string (max length 255)
      - Password sanitization done on front end, but will be hashed on backend
    - "img": file
  - }

### /api/auth/projects/write

- #### POST
  - Create new project entry
  - query: {
    - "title": string (max length 255),
    - "image": file,
    - "summary": string (max length 1000),
    - "github": string (max length 255), (optional)
    - "skills": [string, string, ...]
  - }

### /api/auth/projects/:id

- #### DELETE

  - Delete existing entry by project id
  - path variables: {"id": number}

- #### PATCH
  - Update entry by project id
  - path variable: {"id": number}
  - query (all fields optional): {
    - "title": string (max length 255),
    - "image": file,
    - "summary": string (max length 1000),
    - "github": string (max length 255),
    - "skills": [string, string, ...]
  - }

### /api/user/logout

- #### POST
  - Logs user out and destroys session
  - query: {
    - "user_id": number
  - }
