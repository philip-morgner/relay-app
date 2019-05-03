import React from "react";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import { Link } from "react-router-dom";

import {
  loginContainer as container,
  pageTitle,
  inputStyle,
  buttonContainerStyle,
  buttonStyle
} from "./styles";

// TODO error handling false credentials
export default class Login extends React.Component {
  state = {
    user: "",
    password: "",
    invalidLogin: false
  };

  handleUserInput = e => {
    this.setState({ user: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  handleLoginSuccess = ({ currUser }) => {
    if (!currUser.access_token) {
      console.warn("Invalid user or password!");
      this.setState({ invalidLogin: true });
      return;
    }
    this.setState({ invalidLogin: false });
    sessionStorage.setItem("access_token", currUser.access_token);
    sessionStorage.setItem("user", currUser.user_id);
    this.props.history.push("/home", { currUser });
  };

  handleLoginError = err => {
    console.warn("LOGIN ERROR", err);
  };

  createVariables = () => {
    const { user, password } = this.state;
    if (user === "" || password === "") {
      return;
    }
    let authUser = {};
    authUser.password = password;

    if (user.match(/@/)) {
      authUser.email = user;
    } else {
      authUser.username = user;
    }

    return { authUser };
  };

  handleLogin = () => {
    const variables = this.createVariables();

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: this.handleLoginSuccess,
      onError: this.handleLoginError
    });
  };

  handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className={container}>
        <h1 className={pageTitle}>Login</h1>
        <div className={inputStyle}>
          <input
            className="input"
            type="text"
            placeholder="username or email"
            onChange={this.handleUserInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            className="input"
            type="password"
            placeholder="password"
            onChange={this.handlePasswordInput}
            onKeyDown={this.handleEnter}
          />
        </div>
        <div className={buttonContainerStyle}>
          <button className="button is-info">
            <Link to="/register" className={buttonStyle}>
              Register
            </Link>
          </button>
          <button className="button is-success" onClick={this.handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

const mutation = graphql`
  mutation LoginMutation($authUser: AuthenticationInputType) {
    currUser(authUser: $authUser) {
      user_id
      access_token
      username
      email
      avatar
      hasAvatar
    }
  }
`;
