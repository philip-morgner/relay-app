import React from "react";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import { pathOr } from "ramda";
import graphql from "babel-plugin-relay/macro";
import { css } from "glamor";
import defaultAvatar from "./assets/default_avatar.png";

const container = css({
  margin: "0 32px",
  padding: 8,
  borderBottom: "1px dashed lightgrey",
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: "white"
});

const personalDataStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 8,
  marginLeft: 16,
  "& div > dd": {
    display: "inline-block",
    width: 100,
    textAlign: "left"
  }
});

const imageStyle = css({
  borderRadius: 50,
  height: 50,
  width: 50
});

const italic = css({
  fontStyle: "italic"
});

class User extends React.Component {
  goToChat = userId => () => {
    console.log(userId, this.props.currUser.user_id);
  };

  render() {
    const { avatar, username, email, user_id } = pathOr(
      { username: "", email: "" },
      ["user"],
      this.props
    );
    const avatarSrc = avatar || defaultAvatar;

    return (
      <div className={container} onClick={this.goToChat(user_id)}>
        <img className={imageStyle} src={avatarSrc} alt="avatar" />
        <div className={personalDataStyle}>
          <div>
            <dd className={italic}>username</dd>
            {username}
          </div>
          <div>
            <dd className={italic}>email</dd>
            {email}
          </div>
        </div>
      </div>
    );
  }
}

export default variables => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={variables}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <User user={props.user} currUser={variables.currUser} />;
      }
      return <div>Loading...</div>;
    }}
  />
);
const query = graphql`
  query UserQuery($userId: String) {
    user(userId: $userId) {
      user_id
      username
      email
      avatar
    }
  }
`;
