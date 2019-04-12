import React from "react";
import classnames from "classnames";

export default class Accordion extends React.Component {
  state = { expanded: this.props.selected };

  expand = name => () => {
    this.setState(prevState => ({
      expanded: prevState.expanded === name ? "" : name
    }));
  };

  createHeaderLabel = string => {
    return `Edit ${string}`;
  };

  renderCards = ({ header, body }, key) => (
    <div key={key} className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <button className="btn" type="button" onClick={this.expand(header)}>
            {this.createHeaderLabel(header)}
          </button>
        </h5>
      </div>
      <div
        className={classnames(
          "collapse",
          this.state.expanded === header && "show"
        )}
      >
        <div className="card-body">{body}</div>
      </div>
    </div>
  );

  render() {
    const { actions } = this.props;
    return (
      <div className="accordion">
        {actions.map((action, key) => this.renderCards(action, key))}
      </div>
    );
  }
}
