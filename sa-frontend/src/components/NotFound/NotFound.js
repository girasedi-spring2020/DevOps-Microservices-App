import React from "react";
import { Component } from "react";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  async componentDidMount() {
    console.log("I am in mount");
  }

  render() {
      return <div>THE PAGE YOU ARE LOOKING FOR DOES NOT EXISTS</div>;
  }
}
