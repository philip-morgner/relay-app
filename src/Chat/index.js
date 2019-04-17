import React from "react";
import { path, isEmpty } from "ramda";
// import environment from "../environment";
// import { QueryRenderer } from "react-relay";
// import graphql from "babel-plugin-relay/macro";
import { chatStyle } from "../styles";
import { css } from "glamor";

import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";

export default class Chat extends React.Component {
  render() {
    const { chatPartnerId } = this.props;

    return isEmpty(chatPartnerId) ? (
      <div>no chat selected</div>
    ) : (
      <div className={chatStyle}>
        <ChatHeader chatPartnerId={chatPartnerId} />
        <ChatWindow />
      </div>
    );
  }
}
