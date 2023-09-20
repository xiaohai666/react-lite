import { useState } from 'react';

interface SquareType {
  value: string,
  onClickSquare: () => void
}

function Square({ value, onClickSquare }: SquareType) {
  return <button type="button" className="w-10 h-10 border-1 b-solid" onClick={() => { onClickSquare(); }}>{value}</button>;
}

const whoWin = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return '';
};

export function Game() {
  const [winner, setWinner] = useState('');
  const [currentStpe, setCurrentStpe] = useState(0);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [history, setHistory] = useState<string[][]>([[]]);

  const onClickSquare = (i: number) => {
    if (!squares[i]) {
      squares[i] = currentStpe % 2 === 0 ? 'X' : 'O';
      setWinner(whoWin(squares));
      setHistory([...history.slice(0, currentStpe + 1), [...squares]]);

      if (whoWin(squares)) { return; }
      setSquares(squares);
      setCurrentStpe(((step) => step + 1));
    }
  };

  return (
    <div>
      <h4 className="c-green">{winner ? `winner is ${winner}` : `next stpe ${currentStpe % 2 === 0 ? 'X' : 'O'}`}</h4>
      <div>
        <div className="flex">
          <Square value={squares[0]} onClickSquare={() => { onClickSquare(0); }} />
          <Square value={squares[1]} onClickSquare={() => { onClickSquare(1); }} />
          <Square value={squares[2]} onClickSquare={() => { onClickSquare(2); }} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onClickSquare={() => { onClickSquare(3); }} />
          <Square value={squares[4]} onClickSquare={() => { onClickSquare(4); }} />
          <Square value={squares[5]} onClickSquare={() => { onClickSquare(5); }} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onClickSquare={() => { onClickSquare(6); }} />
          <Square value={squares[7]} onClickSquare={() => { onClickSquare(7); }} />
          <Square value={squares[8]} onClickSquare={() => { onClickSquare(8); }} />
        </div>

      </div>
      <div>
        {history.map((a, i) => (
          <button
            key={a.join()}
            type="button"
            className="block"
            onClick={() => {
              setSquares([...a]);
              setWinner(whoWin(a));
              setCurrentStpe(i);
            }}
          >goto {i}
          </button>
        ))}
      </div>

    </div>
  );
}

export default Game;
