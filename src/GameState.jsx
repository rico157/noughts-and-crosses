const GameState = (boxes) => {
  const all = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]],
    [boxes[0], boxes[3], boxes[6]],
    [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]],
    [boxes[0], boxes[4], boxes[8]],
    [boxes[2], boxes[4], boxes[6]]
  ];

  const result = all.some((line) => {
    const winningLine =
      line.every((box) => box === 1) || line.every((box) => box === 2);

    if (winningLine) {
      return true;
    }
    return false;
  });

  return result;
};

export default GameState;
