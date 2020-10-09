import React from 'react';

const Header = (props) => {
  let player = '';
  let currentPlayer = '';
  if (props.player) {
    player = 'Nought';
    currentPlayer = 'Cross';
  } else {
    currentPlayer = 'Nought';
    player = 'Cross';
  }
  return (
    <header className="App-header">
      <h1>Noughts and Crosses</h1>
      {(() => {
        if (props.gameState) {
          return <h2>{player} won!</h2>;
        } else {
          return <h2>{currentPlayer} turn</h2>;
        }
      })()}
    </header>
  );
};

export default Header;
