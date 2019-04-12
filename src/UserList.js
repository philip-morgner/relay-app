import React from "react";
import { Link } from "react-router-dom";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ThreeDots from "./components/ThreeDots";
import User from "./User";
import {
  listStyle,
  sectionTitle,
  buttonStyle,
  imageStyle,
  currUserStyle
} from "./styles";

export default class UserList extends React.Component {
  state = {
    editsOpen: false
  };

  backToLogin = () => (
    <button onClick={this.logout} className="button is-danger">
      <Link to="/" className={buttonStyle}>
        Back to Login
      </Link>
    </button>
  );

  render() {
    const { currUser } = this.props;
    const actions = [
      { name: "avatar", href: `settings/${currUser.user_id}` },
      { name: "username", href: `settings/${currUser.user_id}` },
      { name: "email", href: `settings/${currUser.user_id}` },
      { name: "password", href: `settings/${currUser.user_id}` }
    ];

    return (
      <div className={listStyle}>
        <h1 className={sectionTitle}>CHATS</h1>
        <div className={currUserStyle}>
          <img className={imageStyle} src={currUser.avatar} alt="avatar" />
          {currUser.username}
          <ThreeDots actions={actions} currUser={currUser} />
        </div>

        <QueryRenderer
          environment={environment}
          query={query}
          variables={{
            userId: this.props.userId
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              if (!props.userList) {
                return this.backToLogin();
              }
              return props.userList.map(
                ({ user_id }, index) =>
                  currUser.user_id !== user_id && (
                    <User
                      key={`${index}`}
                      userId={user_id}
                      currUser={currUser}
                    />
                  )
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
