import React, { PureComponent } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import SquareBox from "./SquareBoxComponent";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends PureComponent<AppProps, AppState> {
  xWinner:string =[]
  oWinner:string=[]
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      squareValues: [] = new Array<string>(9),
      xTurn: true,
      winnerText: ""      
    };
  }

  getSquares = () => {
    var squares = [];

    for (var i = 1; i <= 9; i++) {
      squares.push(
        <SquareBox
          squareClicked={this.squareClicked}
          name={i}
          key={i}
          value={this.state.squareValues[i]}
        />
      );
      if (i % 3 == 0) {
        squares.push(<br />);
      }
    }
    return squares;
  };

  squareClicked = e => {
    if (this.state.xTurn == true) {
      this.state.squareValues[e - 1] = "X";
      this.xWinner.push(e%3);
      this.setState({
        xTurn: false        
      });
    } else {
      this.state.squareValues[e - 1] = "O";
       this.oWinner.push(e%3);
      this.setState({
        xTurn: true,
        oWinner:e%3
      });
    }
    // console.log(this.state.xTurn);
    // console.log(this.state.squareValues);
    console.log(e);
    console.log("x :"+this.xWinner);
    console.log("o: "+this.oWinner)
  };

  render() {
    var squares = this.getSquares();
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        {squares}
        <p>{this.state.winnerText}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
