import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import SquareBox from "./SquareBoxComponent";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      squareValues: []
    };
  }

  getSquares = () => {
    var squares = [];

    for (var i = 1; i <= 9; i++) {
      squares.push(
        <SquareBox squareClicked={this.squareClicked} name={i} />
      );
      if (i % 3 == 0) {
        squares.push(<br />);
      }
    }
    return squares;
  };

  squareClicked = e => {
    var values1 : [];
    values1.push("x");
    this.setState({
    squareValues : values1
    })
    console.log(this.state.squareValues[e])
  };

  render() {
    var squares = this.getSquares();
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        {squares}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
