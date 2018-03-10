## MERN Stack
I was losing my mind with a real web application after several tutorials, so I built this project.

**Stack**
 + MongoDB for storage w Mongoose for communications
 + Express as the server
 + React and Redux for the front-end
 + Node for the API

### Components
Currently, MERN Cupcake has a landing page, a signup form, and a signin form. Users can log out by clicking the signout. There is no user content yet. That is next.

![SignIn Form Screenshot](/screenshots/signin.png)

### Usage

Download and setup the project:
```
git clone https://github.com/monkeywithacupcake/mern-cupcake.git
cd mern-cupcake
npm install
cd client
npm install
```

You will need to set up a `/config/dev.js` file that has the following:

```
module.exports = {
    redirectDomain: 'http://localhost:3000',
    jwtKey: 'pickastring',
};

```

Then, you can start running it by opening a second terminal. You need a local installation of mongodb (or change up the code to work with mLab or mongo online). [Install MongoDB](https://docs.mongodb.com/manual/installation/)

*Terminal 1 - MONGO* Just start the db
```
mongod
```

*Terminal 2 - Application*
```
npm run dev
```

Navigate to `localhost:3000` in your browser. Watch detailed redux logs in the javascript console

### Contributing
Please open issues, submit PRs, whatever.

### License
MIT
