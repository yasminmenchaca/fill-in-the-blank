import React, { Component } from "react";
import Message from "./components/Message";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {

    const mainContainer = {
      padding: "10px",
    };

    return (
      <Container style={mainContainer}>
        <Message />
      </Container>
    );
  }
}

export default App;
