import React from "react";
import Accordion from "../components/Accordion";
import { css } from "glamor";
import EditAvatar from "./EditAvatar";
import Edit from "./Edit";
import { pageTitle } from "../styles";

const SETTINGS = ["avatar", "username", "email", "password"];

const container = css({
  width: "50%",
  margin: "auto"
});

// TODO change <EditAvatar />
export default class SettingsManager extends React.Component {
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

  render() {
    const { userId } = this.props.match.params;
    const { selected } = this.props.location.state;

    const settings = this.prepareSettings(userId);

    return (
      <div className={container}>
        <h1 className={pageTitle}>Settings</h1>
        <Accordion selected={selected} actions={settings} />
      </div>
    );
  }
}
