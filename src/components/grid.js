import React from 'react';
import Info from './info.js'

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row:25,
            column:25,
            gameRunning: false
        }

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    }

    // start() {
        
    // }

    // stop() {

    // }

    // run() {

    // }

    renderBoard() {
        var newBoard = [];
        var cellRow = [];

        for (var i = 0; i < this.state.row; i++) {
                cellRow.push(<Cell key = {[i]} />);
            newBoard.push(<div className = 'row' key={i}>{cellRow}</div>);
        }

        return newBoard;
    }

    render() {
      return (
        <div className = 'container'>
            <div className = 'info'>
                <Info />
            </div>
            <div className = 'gameBoard'>
                <div className = 'header'>
                    <div className = 'buttons'>
                        <button className = 'submit' onClick = {this.start}>Start</button>
                        <button className = 'submit' onClick = {this.speed}>Speed</button>
                        <button className = 'submit' onClick = {this.stop}>Stop</button>
                        <button className = 'submit' onClick = {this.clear}>Clear</button>
                    </div> 
                    <div className = 'gen'>
                        Generation:  
                    </div>  
                </div>
                <div className = 'board'>
                    {this.renderBoard()}
                </div>
            </div>
        </div>
      );
    }
  }

  class Cell extends React.Component {
    render() {
      return (
        <div className="cellContainer"></div>
      );
    }
  }
  