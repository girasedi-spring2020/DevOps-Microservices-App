import React from "react";
import { Component } from "react";
import axios from "axios";

export default class TestJava extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: "",
    };
  }

  async componentDidMount() {
    console.log("I am in mount");
    await axios("http://localhost:8080/testHealth").then(
      (response) => {
        this.setState({
          response: response.data,
          error: null,
        });
      },
      (error) => {
        this.setState({
          response: "",
          error: error,
        });
      }
    );
  }
  render() {
    if (this.state.error != null) {
      return <h4>{this.state.error}</h4>;
    } else {
      return <div>{this.state.response}</div>;
    }
  }
}
