import React from "react";
import UserList from "./UserList";
import Logout from "./Logout";

import { headerStyle, bodyStyle } from "./styles";

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
