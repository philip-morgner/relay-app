import React from "react";
import { Link } from "react-router-dom";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ThreeDots from "./components/ThreeDots";
import User from "./User";

import {
  listStyle,
  listHeaderStyle,
  listBodyStyle,
  sectionTitle,
  buttonStyle,
  imageStyle,
  currUserStyle
} from "./styles";

export default class UserList extends React.Component {
  state = { chatPartnerId: "" };

  backToLogin = () => (
    <button onClick={this.logout} className="button is-danger">
      <Link to="/" className={buttonStyle}>
        Back to Login
      </Link>
    </button>
  );

  renderUserList = data => {
    const { currUser, goToChat } = this.props;
    return data.userList.map(
      ({ user_id }, index) =>
        currUser.user_id !== user_id && (
          <User key={`${index}`} userId={user_id} goToChat={goToChat} />
        )
    );
  };

  render() {
    const { currUser } = this.props;
    const actions = [
      {
        label: "edit avatar",
        pathname: `settings/${currUser.user_id}`,
        state: { selected: "avatar" }
      },
      {
        label: "edit username",
        pathname: `settings/${currUser.user_id}`,
        state: { selected: "username" }
      },
      {
        label: "edit email",
        pathname: `settings/${currUser.user_id}`,
        state: { selected: "email" }
      },
      {
        label: "edit password",
        pathname: `settings/${currUser.user_id}`,
        state: { selected: "password" }
      }
    ];

    return (
      <div className={listStyle}>
        <div className={listHeaderStyle}>
          <h1 className={sectionTitle}>CHATS</h1>
          <div className={currUserStyle}>
            <img className={imageStyle} src={currUser.avatar} alt="avatar" />
            {currUser.username}
            <ThreeDots actions={actions} currUser={currUser} />
          </div>
        </div>
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              if (!props.userList) {
                return this.backToLogin();
              }
              return (
                <div className={listBodyStyle}>
                  {this.renderUserList(props)}
                </div>
              );
            }
            return <div>Loading...</div>;
          }}
        />
      </div>
    );
  }
}

const query = graphql`
  query UserListQuery {
    userList {
      user_id
    }
  }
`;
