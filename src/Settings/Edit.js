import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  QueryRenderer,
  commitMutation,
  createRefetchContainer
} from "react-relay";
import environment from "../environment";
import { inputStyle, buttonContainerStyle } from "../styles";
import { isEmpty, isNil, pathOr, path } from "ramda";

class EditComponent extends React.Component {
  state = {
    [this.props.type]: "",
    confirmValue: "",
    password: "",
    update: ""
  };

  resetState = () => ({
    [this.props.type]: "",
    confirmValue: "",
    password: ""
  });

  handleInput = e => {
    this.setState({ [this.props.type]: e.target.value });
  };

  confirm = e => {
    this.setState({ confirmValue: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  createVariables = () => {
    const userId = pathOr("", ["currUser", "user_id"], this.props);
    const { confirmValue, password, [this.props.type]: value } = this.state;

    const isValid = value === confirmValue;

    if (isValid && !isEmpty(value) && !isEmpty(confirmValue)) {
      return {
        userId,
        updateUser: { [this.props.type]: value },
        confirmPassword: password
      };
    }
    return {};
  };

  handleLogin = () => {
    const variables = this.createVariables();
    if (!isEmpty(variables)) {
      commitMutation(environment, {
        mutation,
        variables,
        onCompleted: ({ updateUser: { [this.props.type]: update } }) => {
          if (!isNil(update)) {
            this.setState({ update, ...this.resetState() });
            this.props.relay.refetch(null, null, null, { force: true });
          }
        },
        onError: err => console.log("err", err)
      });
    }
  };

  render() {
    const { type, currUser } = this.props;
    const passwordType = type === "password";
    const updated = !isEmpty(this.state.update);
    const { confirmValue, password, [this.props.type]: value } = this.state;

    return (
      <div>
        {updated && (
          <div className="notification is-success">
            <button
              onClick={() => {
                this.setState({ update: "" });
              }}
              className="delete"
            />
            {this.state.update} updated!
          </div>
        )}
        <div className={inputStyle}>
          <label htmlFor={`${type}`}>
            {this.state.update || currUser[type]}
          </label>
          <input
            value={value}
            id={`${type}`}
            className="input"
            type={passwordType ? "password" : "text"}
            placeholder={`new ${type}`}
            onChange={this.handleInput}
          />
        </div>
        <div className={inputStyle}>
          <input
            value={confirmValue}
            className="input"
            type={passwordType ? "password" : "text"}
            placeholder={`confirm new ${type}`}
            onChange={this.confirm}
          />
        </div>
        <div className={inputStyle}>
          <input
            value={password}
            className="input"
            type="password"
            placeholder={passwordType ? "old password" : "password"}
            onChange={this.handlePasswordInput}
          />
        </div>
        <div className={buttonContainerStyle}>
          <button className="button is-success" onClick={this.handleLogin}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const query = graphql`
  query EditRefetchQuery($userId: String) {
    user(userId: $userId) {
      ...Edit_currUser
    }
  }
`;

const EditComponentRefetchContainer = createRefetchContainer(
  EditComponent,
  {
    currUser: graphql`
      fragment Edit_currUser on UserType {
        user_id
        username
        email
        avatar
      }
    `
  },
  query
);

const mutation = graphql`
  mutation EditMutation(
    $userId: String!
    $updateUser: UpdateUserInputType
    $confirmPassword: String!
  ) {
    updateUser(
      userId: $userId
      updateUser: $updateUser
      confirmPassword: $confirmPassword
    ) {
      username
    }
  }
`;

export default ({ userId, type }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{ userId }}
    render={({ error, props }) => {
      if (error || !path(["user"], props)) {
        console.log("error");
        return null;
      }
      return (
        <EditComponentRefetchContainer currUser={props.user} type={type} />
      );
    }}
  />
);
