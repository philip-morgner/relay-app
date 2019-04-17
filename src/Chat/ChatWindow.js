import React from "react";
import environment from "../environment";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { chatWindowStyle } from "../styles";
import classnames from "classnames";
import { css } from "glamor";

const textInputStyle = css({
  gridArea: "input / start / end / end",
  display: "flex"
});

const inputStyle = css({
  display: "inline-block",
  width: "100%"
});

// TODO chat background picture
export default class ChatWindow extends React.Component {
  state = { message: "", inputFocused: false };

  handleTextInput = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = () => {
    console.log("send:", this.state.message);
    this.setState({ message: "" });
  };

  renderTextInput = () => {
    const { inputFocused, message } = this.state;
    return (
      <div className={textInputStyle}>
        <div className={inputStyle}>
          <div className="control">
            <input
              className={classnames(
                "input is-medium",
                inputFocused && "is-focused"
              )}
              onClick={this.focusInput}
              onChange={this.handleTextInput}
              type="text"
              placeholder="Write your message here..."
              value={message}
            />
          </div>
        </div>
        <button className="button is-medium" onClick={this.handleSubmit}>
          Send
        </button>
      </div>
    );
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log("message props", props);
            return (
              <div className={chatWindowStyle}>
                {props.messageList || ["hallo", "du", "da"]}
                {this.renderTextInput()}
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

const query = graphql`
  query ChatWindowQuery {
    messageList {
      message
      author_id
    }
  }
`;
