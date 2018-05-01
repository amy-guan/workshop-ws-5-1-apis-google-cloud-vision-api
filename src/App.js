import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      imageT:"",
      imageF:"",
      identification: "",
      identificationT:"",
      identificationF:""
    };
  }

  postImg = () => {
  var formData = new FormData();
  formData.append("myImage", this.state.image);
  fetch("/upload", {
    method: "POST",
    body: formData
  })
    .then(response => {
        if(response.status === 200) {return response.json();}
        else {
          console.log(response);
          return { error: 'there was an error with response' }
        }
    }).then(response => {
      if(response.error) { console.log(response); }
      else {

        this.setState({ identification: response });
      }
    });
};

postImgText = () => {
  var formData = new FormData();
  formData.append("myImage", this.state.imageT);
  fetch("/uploadText", {
    method: "POST",
    body: formData
  })
    .then(response => {
        if(response.status === 200) {return response.json();}
        else {
          console.log(response);
          return { error: 'there was an error with response' }
        }
    }).then(response => {
      if(response.error) { console.log(response); }
      else {

        this.setState({ identificationT: response });
      }
    });
};

postImgFace = () => {
  var formData = new FormData();
  formData.append("myImage", this.state.imageF);
  fetch("/uploadFace", {
    method: "POST",
    body: formData
  })
    .then(response => {
        if(response.status === 200) {return response.json();}
        else {
          console.log(response);
          return { error: 'there was an error with response' }
        }
    }).then(response => {
      if(response.error) { console.log(response); }
      else {

        this.setState({ identificationF: response });
      }
    });
};


  render() {
    return (
      <div>
          <header>
            <h1>Google Cloud Vision Image Identifier</h1>
          </header>
          <div className="uploadForm">
            <h3>Upload Image</h3>
            <input type="file" onChange={e => this.setState({ image: e.target.files[0] })} />


            <button className="button" onClick={this.postImg}>Click to identify</button>
          </div>

          <h3 style={{ marginTop: 50 }}>{this.state.identification}</h3>
        <div className="uploadForm">
          <h3 style={{ marginTop: 50 }}> Upload text Image</h3>
          <input type="file" onChange={e => this.setState({ imageT: e.target.files[0] })} />



          <button className="button" onClick={this.postImgText}>Click to identify</button>
        </div>

        <h3 style={{ marginTop: 50, marginBottom: 20 }}>{this.state.identificationT}</h3>
      <div className="uploadForm">
        <h3 style={{ marginTop: 50 }}> Upload joy likihood image</h3>
        <input type="file" onChange={e => this.setState({ imageF: e.target.files[0] })} />



        <button className="button" onClick={this.postImgFace}>Click to identify</button>
      </div>

      <h3 style={{ marginTop: 50, marginBottom: 20 }}>{this.state.identificationF}</h3>
    </div>


    );
  }
}

export default App;
