import React from "react";
import UserList from "./UserList";
import Logout from "./Logout";
import { css } from "glamor";

const headerStyle = css({
  position: "fixed",
  height: 50,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "green",
  zIndex: 1,
  padding: 8
});

const bodyStyle = css({
  paddingTop: 50
});

class App extends React.Component {
  render() {
    const { currUser } = this.props.location.state;

    return [
      <div key="header" className={headerStyle}>
        <Logout />
      </div>,
      <div key="body" className={bodyStyle}>
        <UserList currUser={currUser} />
      </div>,
      <div key="footer">footer</div>
    ];
  }
}

export default App;
