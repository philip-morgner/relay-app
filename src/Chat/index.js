import React from "react";
import { isEmpty } from "ramda";
// import environment from "../environment";
// import { QueryRenderer } from "react-relay";
// import graphql from "babel-plugin-relay/macro";
import { chatStyle } from "../styles";

import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";

export default class Chat extends React.Component {
  render() {
    const { chatPartnerId, currUser } = this.props;

    return isEmpty(chatPartnerId) ? (
      <div>no chat selected</div>
    ) : (
      <div className={chatStyle}>
        <ChatHeader chatPartnerId={chatPartnerId} />
        <ChatWindow currUser={currUser} chatPartnerId={chatPartnerId} />
      </div>
    );
  }
}
