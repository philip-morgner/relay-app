import React from "react";
import Accordion from "../components/Accordion";
import { css } from "glamor";
import EditAvatar from "./EditAvatar";
import Edit from "./Edit";
import { pageTitle } from "../styles";
import { pathOr } from "ramda";
import environment from "../environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

const SETTINGS = ["avatar", "username", "email", "password"];

const container = css({
  width: "50%",
  margin: "auto"
});

export default class SettingsManager extends React.Component {
  state = { showNotification: false };

  prepareSettings = userId => {
    return SETTINGS.map((setting, key) => {
      return {
        header: setting,
        body:
          setting === "avatar" ? (
            <EditAvatar userId={userId} />
          ) : (
            <Edit type={setting} userId={userId} />
          )
      };
    });
  };

  handleDeleteUser = userId => () => {
    commitMutation(environment, {
      mutation,
      variables: { userId },
      onCompleted: () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");
        this.props.history.replace("/");
      },
      onError: () => {
        console.log("couldnt delete user");
      }
    });
  };

  renderSuccessNotification = value => (
    <div className="notification is-success">
      <button
        onClick={() => {
          this.setState({ showNotification: false });
        }}
        className="delete"
      />
      user successfully deleted!
    </div>
  );

  render() {
    const { showNotification } = this.state;
    const userId = pathOr(
      sessionStorage.getItem("user"),
      ["match", "params", "userId"],
      this.props
    );
    const { selected } = pathOr("avatar", ["location", "state"], this.props);

    const settings = this.prepareSettings(userId);

    return (
      <div className={container}>
        <h1 className={pageTitle}>Settings</h1>
        <Accordion selected={selected} actions={settings} />
        {showNotification && this.renderSuccessNotification()}
        <button
          onClick={this.handleDeleteUser(userId)}
          className="button is-danger"
        >
          DELETE USER
        </button>
      </div>
    );
  }
}

const mutation = graphql`
  mutation SettingsMutation($userId: String!) {
    removeUser(userId: $userId) {
      user_id
    }
  }
`;
