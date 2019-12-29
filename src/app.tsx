import React from 'react'
import { hot } from 'react-hot-loader/root'
// import styles from './css/app.module'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './global'

const styles = require('./css/app.module');


// https://learnwithparam.com/blog/dynamic-pages-in-react-router/
const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

// react routing example
const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

// userId will be Array index + 1
const UsersPage = () => {
  return (
    <>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

const UserPage = ({ match, location }) => {
  const { params: { userId } } = match;
  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match)}</code>
        {/* { "path": "/user/:userId", "url": "/user/1", "isExact": true, "params": { "userId": "1" } } */}

      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
    </>
  );
};

const SearchPage = ({ match, location }) => {
  return (
    <p>
      <strong>Location Props: </strong>
      <div>{location.search}</div>
      {/* {JSON.stringify(location, null, 2)} */}
    </p>
  );
}

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const  App = () => {
  return ( 
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/search?q=react">Search</Link>
        <Link to="/404-not-found">404</Link>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path='/users' component={UsersPage} />
          <Route exact path='/user/:userId' component={UserPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default hot(App)