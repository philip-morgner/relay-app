import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer, createRefetchContainer } from "react-relay";
import { isEmpty, path, pathOr } from "ramda";

import environment from "../environment";
import { css } from "glamor";

const MAX_IMAGE_SIZE = 25165824;

export const settingsStyle = css({
  display: "flex",
  padding: 8,
  border: "1px dashed grey",
  margin: "auto",
  width: 400,
  justifyContent: "space-around"
});

export const avatarSmallStyle = css({
  height: 250,
  width: 200
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
  justifyContent: "flex-end"
});

export const labelStyle = css({
  paddingBottom: 16
});

class EditAvatarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: {} };
    this.chooseFile = React.createRef();
  }

  browseImages = () => {
    this.chooseFile.current.click();
  };

  chooseImage = e => {
    const image = e.target.files[0];
    console.log(image.size);
    if (image.size > MAX_IMAGE_SIZE) {
      // add error handling
      return;
    }
    this.setState({ image });
  };

  send = () => {
    const imageUpload = new FormData();
    imageUpload.append("file", this.state.image);
    const { avatar } = pathOr("", ["user"], this.props);

    return fetch(avatar, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token")
      },
      body: imageUpload
    });
  };

  // refetch does not work, need cachebreaker for img src
  handleSubmit = () => {
    this.send()
      .then(() => window.location.reload())
      .catch(e => console.log(e));
  };

  render() {
    const { image } = this.state;
    const { avatar } = pathOr("", ["user"], this.props);
    const imageChosen = !isEmpty(image);

    return (
      <div className={settingsStyle}>
        <div onClick={this.handleImageClick} className={imageContainer}>
          <a href={avatar}>
            <img className={avatarSmallStyle} src={avatar} alt="avatar" />
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
  query EditAvatarRefetchQuery($userId: String) {
    user(userId: $userId) {
      ...EditAvatar_user
    }
  }
`;

const EditAvatarComponentRefetchContainer = createRefetchContainer(
  EditAvatarComponent,
  {
    user: graphql`
      fragment EditAvatar_user on UserType {
        avatar
      }
    `
  },
  query
);

export default ({ userId }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{ userId }}
    render={({ error, props }) => {
      if (error || !path(["user"], props)) {
        console.log("errore");
        return null;
      }
      console.log("props edit comp", props.user);
      return <EditAvatarComponentRefetchContainer user={props.user} />;
    }}
  />
);
