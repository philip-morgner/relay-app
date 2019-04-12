import React from "react";
import { Link } from "react-router-dom";
import { buttonStyle } from "./styles";

export default class Logout extends React.Component {
  logout = () => {
    sessionStorage.removeItem("access_token");
  };

  render() {
    return (
      <button onClick={this.logout} className="button is-danger">
        <Link to="/" className={buttonStyle}>
          Logout
        </Link>
      </button>
    );
  }
}
