import React from "react";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import { Redirect } from "react-router-dom";
import {
  loginContainer as container,
  pageTitle,
  inputStyle,
  buttonContainerStyle
} from "./styles";

export default class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleUserNameInput = e => {
    this.setState({ username: e.target.value });
  };

  handleEmailInput = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  handleRegisterSuccess = ({ registerUser }) => {
    console.log(registerUser);
    if (!registerUser.access_token) {
      console.warn("Something went wrong/ user exists");
      return;
    }
    sessionStorage.setItem("access_token", registerUser.access_token);
    sessionStorage.setItem("user", registerUser.user_id);
    this.props.history.push("/home", { currUser: registerUser });
  };

  handleRegisterError = err => {
    console.warn("ERROR", err);
  };

  handleRegister = () => {
    console.log(this.state);
    commitMutation(environment, {
      mutation,
      variables: { newUser: this.state },
      onCompleted: this.handleRegisterSuccess,
      onError: this.handleRegisterError
    });
  };

  handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleRegister();
    }
  };

  render() {
    return (
      <div className={container}>
        <h1 className={pageTitle}>Register</h1>
        <div className={inputStyle}>
          <input
            className="input"
            type="text"
            placeholder="username"
            onChange={this.handleUserNameInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            className="input"
            type="text"
            placeholder="email"
            onChange={this.handleEmailInput}
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
          <button
            className="button is-info"
            onClick={this.props.history.goBack}
          >
            Back
          </button>
          <button className="button is-success" onClick={this.handleRegister}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

const mutation = graphql`
  mutation RegisterMutation($newUser: RegistrationInputType) {
    registerUser(newUser: $newUser) {
      user_id
      access_token
      username
      email
      avatar
      hasAvatar
    }
  }
`;
