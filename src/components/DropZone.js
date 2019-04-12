import React from "react";
import { css } from "glamor";
import classnames from "classnames";

export const dropZoneStyle = css({
  height: 200,
  width: 200,
  backgroundColor: "#fff",
  //   border: "2px dashed rgb(187, 186, 186)",
  border: "2px solid red",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: 16
});

export const fileInputStyle = css({
  display: "none"
});

export const highlightStyle = css({
  backgroundColor: "rgb(188, 185, 236)"
});

export const IconStyle = css({ opacity: "0.3", height: 64, width: 64 });

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = { hightlight: false };

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }

  onDragOver(evt) {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ hightlight: true });
  }

  onDragLeave() {
    this.setState({ hightlight: false });
  }

  onDrop(event) {
    event.preventDefault();

    if (this.props.disabled) return;

    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  render() {
    return (
      <div
        className={classnames(dropZoneStyle)}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <input
          ref={this.fileInputRef}
          className={fileInputStyle}
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <i class="fas fa-cloud-upload-alt" />
      </div>
    );
  }
}
