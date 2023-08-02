<div align="center">
  <h1>Personal Portfolio and Blog</h1>
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

In the project directory, you can run:

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Mysql

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
