import { useState } from "react";

function Square({ value, onSquareClick }) {
  //set square components values dynamically

  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9"
    >
      {value}
    </button>
  );
}
function Board({xisNext, squares, onPlay}) {

  const winner = calculateWinner(squares);

  let status;

  if(winner){
    status = `Winner: ${winner}`
  } else {
    status = "Next Player " + (xisNext ? "X" : "O")
  }

  function handleClick(i) {

    if(squares[i] || calculateWinner(squares)){
      return;
    }

    const nextSquares = squares.slice();
    
    if(xisNext){
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    onPlay(nextSquares);
    // console.log("clicked");
  }
  return (
    <>
    <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)}></Square>
      </div>
    </>
  );
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xisNext, setXisNext] = useState(true);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setXisNext(!xisNext);
    setHistory([...history, nextSquares]);
  }

  const moves = history.map((squares,move)=>{
    let description;
    if(move >0){
      description = `Go to the move # ${move}`
    } else {
      description = `Go to start the game`
    }
    return (
      // eslint-disable-next-line react/jsx-key
      <li key={move}>
        <button>
          {
            description
          }
        </button>
      </li>
    )
  })

  return (
  <div>
     <div>
      <Board
        xisNext={xisNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
    </div>
    <div>
      <ol>{moves}</ol>
    </div>
  </div>
  );
}


function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]=== squares[b] && squares[a]=== squares[c])
    {
      return squares[a]
    }
  }
}
