## MERN Stack
I was losing my mind with a real web application after several tutorials, so I built this project.

**Stack**
 + MongoDB for storage w Mongoose for communications
 + Express as the server
 + React and Redux for the front-end
 + Node for the API
 + Styling is with MaterializeCSS, but I want to shift to styled-components

### Goals for MERN Cupcake
MERN cupcake is a test environment that eventually could be used for applications where users have their own nested data.

#### Structure
User : {email, password, _id}
 - Monkey : {name, user, _id}
 - Monkey : {name, user, _id}
    - Cupcake : {color, status, monkey, _id}

Users can have accounts, which are authenticated using a password with bcrypt. JSONWebTokens (JWT) are created on successful authorization and they allow the user to see the dashboard, and add monkeys and cupcakes.
Monkeys are owned by Users. Cupcakes are always related to a particular Monkey.

*Why are Monkeys and Cupcakes separate if they are nested?* : In a real application, we may need to fetch cupcakes independently of their monkeys and users. For example, we may want to let some other user buy a cupcake or frost a cupcake.

### Branches
The master branch will always be the most complete working copy.
Additional feature branches are created as progress is made on different components of the application. Once they are merged into the master, they are deleted.

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

### Components
Currently, MERN Cupcake has a landing page, a signup form, and a signin form. Users can log out by clicking the signout. Once a user is authenticated, they see the dashboard.

#### Add users to the db with the Sign Up form
![SignUp Form Screenshot](/screenshots/signupform.png)

#### Sign in users with the Sign In form
![SignIn Form Screenshot](/screenshots/signinform.png)

#### Users go to a dashboard when log in is successful. The dashboard shows the currently logged in user, allows adding monkeys, allows adding cupcakes to monkeys, and shows monkeys with their cupcakes in cards and cupcakes alone in cards. 
![Dashboard Screenshot](/screenshots/userdash.png)

#### Big Deal - if you see this, just go to the routh `/signout` to clear the authenticated=true. We can fix this by adding a 'go find the user from the token' but that has not been added yet.
![Dashboard Screenshot](/screenshots/needtosignout.png)

### Contributing
Please open issues, submit PRs, whatever.

### License
MIT
