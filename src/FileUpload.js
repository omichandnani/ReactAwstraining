import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .post(`/uploadFile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        // handle your response;
      })
      .catch(error => {
        // handle your error
      });
  };

  handleFileUpload = event => {
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFile}>
          <input
            label="upload file"
            type="file"
            className="btn btn-success"
            onChange={this.handleFileUpload}
          />

          <div>
            <button type="submit" className="btn btn-primary" width="66">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FileUpload;
