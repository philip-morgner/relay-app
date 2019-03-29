import React from "react";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import { css } from "glamor";

const container = css({
  width: 300,
  height: 270,
  borderRadius: 10,
  boxShadow: "1px 2px #B2B2B2",
  backgroundColor: "#D4EFFF",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const pageTitle = css({
  margin: 20,
  // bulma css overwrites default
  fontSize: "2em"
});

const inputStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: 8
});

const buttonContainerStyle = css({
  width: "inherit",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 16,
  marginTop: 16
});

export default class Login extends React.Component {
  state = {
    user: "",
    password: ""
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
      return;
    }
    sessionStorage.setItem("access_token", currUser.access_token);
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
          />
        </div>
        <div className={buttonContainerStyle}>
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
      access_token
      user_id
      username
      email
      avatar
      hasAvatar
    }
  }
`;
