import React from "react";
import { Link } from "react-router-dom";
import { css } from "glamor";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import User from "./User";

const listStyle = css({
  width: "33%",
  // vertically just the whole damn page
  height: 1000,
  textAlign: "center",
  backgroundColor: "#E8FFED"
});

const sectionTitle = css({
  padding: 20,
  // bulma css overwrites default
  fontSize: "2em"
});

const buttonStyle = css({
  color: "white"
});

const imageStyle = css({
  borderRadius: 50,
  height: 50,
  width: 50
});

const firstRow = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  paddingBottom: 16
});

export default class UserList extends React.Component {
  backToLogin = () => (
    <button onClick={this.logout} className="button is-danger">
      <Link to="/" className={buttonStyle}>
        Back to Login
      </Link>
    </button>
  );

  render() {
    const { currUser } = this.props;
    console.log(currUser);
    return (
      <div className={listStyle}>
        <h1 className={sectionTitle}>CHATS</h1>
        <div className={firstRow}>
          <strong>current user</strong>
          {currUser.username}
          <img className={imageStyle} src={currUser.avatar} alt="avatar" />
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
              return props.userList.map(({ user_id }, index) =>
                currUser.user_id !== user_id ? (
                  <User key={`${index}`} userId={user_id} currUser={currUser} />
                ) : null
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
