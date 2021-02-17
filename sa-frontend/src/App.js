import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Polarity from "./components/Polarity/Polarity";
import TestJava from "./components/TestJava/TestJava";
import TestPython from "./components/TestPython/TestPython";
import NotFound from "./components/NotFound/NotFound";

const style = {
  marginLeft: 12,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      polarity: undefined,
    };
  }

  analyzeSentence() {
    fetch("http://localhost:8080/sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence: this.textField.getValue() }),
    })
      .then((response) => response.json())
      .then((data) => this.setState(data));
  }

  onEnterPress = (e) => {
    if (e.key === "Enter") {
      this.analyzeSentence();
    }
  };

  render() {
    const currentURL = window.location.href;
    const polarityComponent =
      this.state.polarity !== undefined ? (
        <Polarity
          sentence={this.state.sentence}
          polarity={this.state.polarity}
        />
      ) : null;
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={({}) => (
                <MuiThemeProvider>
                  <div className="centerize">
                    <Paper zDepth={1} className="content">
                      <h2>CSYE 7220 Sentiment Analyser</h2>
                      <TextField
                        ref={(ref) => (this.textField = ref)}
                        onKeyUp={this.onEnterPress.bind(this)}
                        hintText="Type your sentence."
                      />
                      <RaisedButton
                        label="Send"
                        style={style}
                        onClick={this.analyzeSentence.bind(this)}
                      />
                      {polarityComponent}
                    </Paper>
                  </div>
                </MuiThemeProvider>
              )}
            />
            <Route exact path="/testHealth" component={TestJava} />
            <Route exact path="/testComms" component={TestPython} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
