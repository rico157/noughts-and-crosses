import React from 'react';
import cross from './cross.svg';
import nought from './nought.svg';

const Boxes = (props) => {
  const { index, block, onClickFunction, gameState } = props;

  const handleClick = (event) => {
    if (!gameState) {
      onClickFunction(event.target.id);
    }
  };

  const blockRender = () => {
    if (block === 0) {
      return;
    } else if (block === 1) {
      return <img src={cross} className="App-logo" alt=""></img>;
    } else if (block === 2) {
      return <img src={nought} className="App-logo" alt=""></img>;
    }
  };
  return (
    <div key={index} className="block" id={index} onClick={handleClick}>
      {blockRender()}
    </div>
  );
};

export default Boxes;
