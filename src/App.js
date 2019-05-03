import React from "react";
import UserList from "./UserList";
import Logout from "./Logout";
import Chat from "./Chat";
import { Link } from "react-router-dom";
import { buttonStyle } from "./styles";

import { headerStyle, bodyStyle } from "./styles";

// TODO:
// HOC to wrap components in header and footer
// Loading Gif
class App extends React.Component {
  state = { chatPartnerId: "" };

  goToChat = chatPartnerId => () => {
    this.setState({ chatPartnerId });
  };

  render() {
    const { currUser } = this.props.location.state;
    return (
      <div className={bodyStyle}>
        <div className={headerStyle}>
          <button className="button is-link">
            <Link to={`/settings/${currUser.user_id}`} className={buttonStyle}>
              Settings
            </Link>
          </button>
          <Logout />
        </div>
        <UserList currUser={currUser} goToChat={this.goToChat} />
        <Chat currUser={currUser} chatPartnerId={this.state.chatPartnerId} />
      </div>
    );
  }
}

export default App;
