import React from "react";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import { pathOr } from "ramda";
import graphql from "babel-plugin-relay/macro";
import defaultAvatar from "./assets/default_avatar.png";
import {
  userContainer as container,
  personalDataStyle,
  imageStyle,
  italic
} from "./styles";

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
