import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <protected />
      <ul>
        <li>
        {Login}
          <Link to="/protected">Iniciar sesión</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Salir
        </button>
      </p>
    ) : (
      <p>No estas conectadx</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


const users = () => {
        console.log('hola');
      let user = this.props.onAddUser;
      localStorage.setItem('user', user);
    };

const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })      
    })
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>Ingresa tus datos para ingresar</p>
        <form onSubmit={this.props.onAddUser}>
        <input type= 'text' placeholder = 'Nombre' name='name' />
        <input type= 'email' placeholder = 'Email' name='email' />
      </form>
        <button type= 'submit' onClick={this.login}>Iniciar sesión</button>
      </div>
    );
  }
}

export default AuthExample;