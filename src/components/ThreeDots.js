import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ellipsisStyle } from "../styles";

export default class ThreeDots extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const { actions } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <div
        className={classnames("dropdown", {
          "is-active": dropdownOpen
        })}
      >
        <div className="dropdown-trigger">
          <span
            onClick={this.toggle}
            className={ellipsisStyle}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <i className="fas fa-ellipsis-v" />
          </span>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className={dropdownOpen ? "is-active" : ""}>
            {actions.map(({ label, pathname, state }, key) => (
              <Link
                key={key}
                to={{ pathname, state }}
                className="dropdown-item"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
