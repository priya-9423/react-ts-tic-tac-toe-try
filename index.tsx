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
  xWinner:string =""
  oWinner:string=""
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
      var s=e%3;
      console.log('s: '+s)
      this.xWinner.concat(s);

      this.setState({
        xTurn: false        
      });
    } else {
      this.state.squareValues[e - 1] = "O";
      this.setState({
        xTurn: true,
        oWinner:e%3
      });
    }
    // console.log(this.state.xTurn);
    // console.log(this.state.squareValues);
    console.log(e);
    console.log("x :"+this.state.xWinner);
    console.log("o: "+this.state.oWinner)
    this.checkIsWinner();
  };

  checkIsWinner = () => {
    var strWin = "";
    for (var i = 0; i < 9; i++) {
      if (this.state.XTurn) {
        if (this.state.squareValues[i].contains("O")) strWin.concat(i % 3);
      } else {
        if (this.state.squareValues[i] == "X") strWin.concat(i % 3);
      }
    }
    console.log(strWin);
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
