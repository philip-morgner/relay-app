import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import { isEmpty, path, pathOr, isNil } from "ramda";

import environment from "../environment";
import { css } from "glamor";

const MAX_IMAGE_SIZE = 25165824;

export const settingsStyle = css({
  display: "flex",
  padding: 8,
  border: "1px dashed grey",
  margin: "auto",
  width: "100%",
  height: "100%",
  justifyContent: "space-around"
});

export const avatarSmallStyle = css({
  height: 250,
  width: 180
});
export const avatarPreviewStyle = css({
  height: "80%",
  width: "80%"
});
export const imageContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const uploadStyle = css({
  padding: 16,
  width: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

export const labelStyle = css({
  paddingBottom: 16
});

// TODO
// style of notification, buttons and img (img differs in size after file is chosen)
// handleImageClick: make avatarPreviewStyle, another click: back to normal (avatarSmallStyle)
class EditAvatarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      preview: null,
      uploadStatus: null,
      optimisticResponse: null
    };
    this.chooseFile = React.createRef();
  }

  browseImages = () => {
    this.chooseFile.current.click();
  };

  chooseImage = e => {
    const image = e.target.files[0];
    console.log(image.size);
    if (image.size > MAX_IMAGE_SIZE) {
      this.setState({ uploadStatus: 400 });
    }
    this.setState({
      image,
      preview: URL.createObjectURL(image),
      uploadStatus: null
    });
  };

  clearImage = () => {
    this.setState({ image: {}, preview: null });
  };

  send = avatarUploadUrl => {
    const imageUpload = new FormData();
    imageUpload.append("file", this.state.image);

    return fetch(avatarUploadUrl, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token")
      },
      body: imageUpload
    });
  };

  handleSubmit = () => {
    const { avatar } = pathOr("", ["user"], this.props);
    const end = avatar.lastIndexOf("/");
    const avatarUploadUrl = avatar.slice(0, end);
    this.send(avatarUploadUrl)
      .then(res => {
        if (!(res.status === 200)) {
          this.clearImage();
        }
        this.setState(prevState => ({
          image: {},
          preview: null,
          uploadStatus: res.status,
          optimisticResponse: prevState.preview
        }));
      })
      .catch(e => console.log("error", e.message));
  };

  renderNotification = status => (
    <div
      className={`notification ${status === 200 ? "is-success" : "is-danger"}`}
    >
      <button
        onClick={() => {
          this.setState({ image: {}, uploadStatus: null });
        }}
        className="delete"
      />
      {status === 200
        ? "Avatar successfully uploaded!"
        : status === 400
        ? "Choose image of size 24MB or less"
        : "Choose a different image! Accepted image types are: jpg, jpeg, png, svg"}
    </div>
  );

  getAvatarSrc = avatar => {
    const { preview, optimisticResponse } = this.state;
    if (!isNil(preview)) {
      return preview;
    }
    if (!isNil(optimisticResponse)) {
      return optimisticResponse;
    }
    return avatar;
  };

  render() {
    const { image, uploadStatus } = this.state;
    const { avatar } = pathOr("", ["user"], this.props);
    const imageChosen = !isEmpty(image);
    const imageUploaded = !isNil(uploadStatus);
    console.log("state", this.state);

    return (
      <div className={settingsStyle}>
        {imageUploaded && this.renderNotification(uploadStatus)}
        <div onClick={this.handleImageClick} className={imageContainer}>
          <button
            onClick={this.clearImage}
            className="button is-small is-danger"
            disabled={!imageChosen || imageUploaded}
          >
            Revert
          </button>
          <a href={avatar}>
            <img
              className={avatarSmallStyle}
              src={this.getAvatarSrc(avatar)}
              alt="avatar"
            />
          </a>
        </div>
        <div className={uploadStyle}>
          <div className={labelStyle}>{imageChosen && image.name}</div>
          <input
            onChange={this.chooseImage}
            hidden="hidden"
            ref={this.chooseFile}
            type="file"
          />
          <button
            onClick={imageChosen ? this.handleSubmit : this.browseImages}
            className="button is-info"
          >
            {imageChosen ? "Submit" : "Choose Image"}
          </button>
        </div>
      </div>
    );
  }
}

const query = graphql`
  query EditAvatarQuery($userId: String) {
    user(userId: $userId) {
      avatar
    }
  }
`;

export default ({ userId }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{ userId }}
    render={({ error, props }) => {
      if (error || !path(["user"], props)) {
        return null;
      }
      return <EditAvatarComponent user={props.user} />;
    }}
  />
);
