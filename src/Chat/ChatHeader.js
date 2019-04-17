import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { path } from "ramda";

import environment from "../environment";
import ThreeDots from "../components/ThreeDots";
import { imageStyle, chatHeaderStyle } from "../styles";
import { css } from "glamor";

export default class ChatWindow extends React.Component {
  render() {
    const { chatPartnerId } = this.props;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{ chatPartnerId }}
        render={({ error, props }) => {
          if (error) {
            //  || !path(["user"], props)
            console.log("error", error);
            return <div>{error.message}</div>;
          } else if (props) {
            const { avatar, username } = props.user;
            console.log("chat header props", props);
            return (
              <div className={chatHeaderStyle}>
                <img className={imageStyle} src={avatar} alt="avatar" />
                {username}
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

const query = graphql`
  query ChatHeaderQuery($chatPartnerId: String) {
    user(userId: $chatPartnerId) {
      username
      avatar
    }
  }
`;
