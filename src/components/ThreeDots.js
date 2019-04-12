import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ellipsisStyle } from "../styles";

export default class ThreeDots extends React.Component {
  state = {
    editsOpen: false
  };

  render() {
    const { actions } = this.props;

    return (
      <div
        className={classnames("dropdown", {
          "is-active": this.state.editsOpen
        })}
      >
        <div className="dropdown-trigger">
          <span
            onClick={() => {
              this.setState({ editsOpen: !this.state.editsOpen });
            }}
            className={ellipsisStyle}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <i className="fas fa-ellipsis-v" />
          </span>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div
            className={classnames("dropdown-content", {
              "is-active": this.state.editsOpen
            })}
          >
            {actions.map(({ name, href }, key) => (
              <Link
                key={key}
                to={{ pathname: href, state: { selected: name } }}
                className="dropdown-item"
              >
                {`edit ${name}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
