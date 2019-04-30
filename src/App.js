import React from "react";
import "./App.css";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

const JumbotronMargin = { marginBottom: 0 };
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decreaseNumber = () => {
    this.setState({
      number: this.state.number - 1
    });
    if (this.state.number < 0) {
      this.setState({
        number: 0
      });
      alert("Error! You have been warned!");
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Jumbotron style={JumbotronMargin} fluid>
            <Container fluid>
              <h1 className="display-3">Project React Styling</h1>
              <p className="lead">
                This is a project that are based on my Project React Counter,
                but I styled it with reactstrap.
              </p>
            </Container>
          </Jumbotron>
        </div>
        <Alert color="danger">
          Do not try to reduce it to negative number! You have been warned.
        </Alert>
        <br />
        <h2>{this.state.number}</h2>
        <div>
          <Button color="danger" onClick={this.decreaseNumber}>
            -
          </Button>{" "}
          <Button color="primary" onClick={this.addNumber}>
            +
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default App;
