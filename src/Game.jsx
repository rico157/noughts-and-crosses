import React from 'react';
import GameState from './GameState';
import Header from './Header';
import './Game.css';

import Boxes from './Boxes';

class Game extends React.Component {
  state = {
    boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: true,
    gameState: false
  };

  onClickFunction = (index) => {
    this.setState(({ boxes, player }) => {
      if (boxes[index] === 0) {
        const newBoxes = [...boxes];
        player ? newBoxes.splice(index, 1, 1) : newBoxes.splice(index, 1, 2);
        return {
          boxes: newBoxes,
          player: !player,
          gameState: GameState(newBoxes)
        };
      }
    });
  };

  render() {
    const array = this.state.boxes;
    const player = this.state.player;
    return (
      <div>
        <Header player={player} gameState={this.state.gameState} />
        <div className="grid">
          {array.map((block, index) => (
            <Boxes
              key={index}
              array={array}
              index={index}
              block={block}
              gameState={this.state.gameState}
              onClickFunction={this.onClickFunction}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
