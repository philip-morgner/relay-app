import React from "react";
import UserList from "./UserList";
import Logout from "./Logout";
import Chat from "./Chat";

import { headerStyle, bodyStyle } from "./styles";

// TODO:
// HOC to wrap components in header and footer
// Loading Gif
class App extends React.Component {
  state = { chatPartnerId: "" };

  goToChat = chatPartnerId => () => {
    console.log(chatPartnerId);
    this.setState({ chatPartnerId });
  };

  render() {
    const { currUser } = this.props.location.state;
    return (
      <div className={bodyStyle}>
        <div className={headerStyle}>
          <Logout />
        </div>
        <UserList currUser={currUser} goToChat={this.goToChat} />
        <Chat chatPartnerId={this.state.chatPartnerId} />
      </div>
    );
  }
}

export default App;
