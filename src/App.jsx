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

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);

  function handleClick(i) {

    if(squares[i]){
      return;
    }

    const nextSquares = squares.slice();
    
    if(xisNext){
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
   setSquares(nextSquares)
   setXisNext(!xisNext)
    // console.log("clicked");
  }
  return (
    <>
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
