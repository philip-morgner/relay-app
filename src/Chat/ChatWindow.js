import React from "react";
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

const messageStyle = incoming =>
  css({
    gridArea: "chat / start / input / end",
    fontSize: 20,
    boxShadow: "1px 1px 1px green",
    display: "flex",
    flexDirection: "column",
    alignItems: incoming ? "flex-start" : "flex-end"
  });

const getWebsocketUrl = (...ids) => {
  console.log("TCL: getWebsocketUrl -> ids", ids);
  ids.sort();
  const chatId = ids.join("-");
  console.log("TCL: getWebsocketUrl -> chatId", chatId);
  return `ws://localhost:4000/api/users/chat/${chatId}`;
};

// TODO chat background picture
export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    const { currUser, chatPartnerId } = props;

    this.state = {
      messages: [],
      message: "",
      inputFocused: false,
      ws: new WebSocket(getWebsocketUrl(currUser.user_id, chatPartnerId))
    };
  }

  // start websocket test

  async componentDidMount() {
    const { ws } = this.state;
    const { currUser, chatPartnerId } = this.props;

    ws.onopen = e => {
      // on connecting, do nothing but log it to the console
      console.log("connected", e);
    };

    ws.onerror = err => {
      console.log("websocket error", err);
    };

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      console.log(evt.data);
      const message = JSON.parse(evt.data);
      console.log("MESSAGE", message);

      this.addMessage(message);
    };

    ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(getWebsocketUrl(currUser.user_id, chatPartnerId))
      });
    };
  }

  addMessage = message =>
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));

  submitMessage = () => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = {
      sender_id: this.props.currUser.user_id,
      receiver_id: this.props.chatPartnerId,
      message: this.state.message
    };
    console.log("TCL: ChatWindow -> submitMessage -> message", message);
    if (!this.state.ws) {
      console.log("error");
      return;
    }
    this.state.ws.send(JSON.stringify(message));
    // this.addMessage(message);
    this.setState({ message: "" });
  };

  // end websocket test

  handleTextInput = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = () => {
    console.log("send:", this.state.message);
    this.setState({ message: "" });
  };

  // make better
  renderMessages = () => {
    return this.state.messages.map(
      ({ receiver_id, sender_id, message }, index) => {
        console.log(
          "receiver",
          this.props.currUser.user_id === receiver_id,
          this.props.currUser.user_id,
          receiver_id
        );
        return (
          <div
            key={index}
            className={messageStyle(
              receiver_id === this.props.currUser.user_id
            )}
          >
            {message}
          </div>
        );
      }
    );
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
        <button className="button is-medium" onClick={this.submitMessage}>
          Send
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className={chatWindowStyle}>
        {this.renderMessages()}
        {this.renderTextInput()}
      </div>
    );
  }
}
