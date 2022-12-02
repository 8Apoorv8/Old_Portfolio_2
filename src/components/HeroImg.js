import React, { Component } from "react";
import "./HeroImg.css";
class HeroImg extends Component {
  render() {
    return(
      <div className="heroImg">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg;
