import { useState } from "react"

function Square({value, onSquareClick}){
  //set square components values dynamically
  
  
  return (<button onClick={onSquareClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9">{value}</button>)
}

export default function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(){
    console.log('clicked')
  }
  return(
    <>
    <div className="flex">
      <Square value={squares[0]} onSquareClick={handleClick}></Square>
      <Square value={squares[1]}></Square>
      <Square value={squares[2]}></Square>
    </div>
    <div className="flex">
      <Square value={squares[3]}></Square>
      <Square value={squares[4]}></Square>
      <Square value={squares[5]}></Square>
    </div>
    <div className="flex">
      <Square value={squares[6]}></Square>
      <Square value={squares[7]}></Square>
      <Square value={squares[8]}></Square>
    </div> 
    </>
  )
}