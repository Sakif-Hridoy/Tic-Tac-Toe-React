import { useState } from "react"

function Square(){
  //set square components values dynamically
  const [value,setValue] = useState(null)
  function handleClick(){
    setValue("X")
    console.log('Clicked')
  }
  return (<button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9">{value}</button>)
}

export default function Board(){
  return(
    <>
    <div>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
    <div>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
    <div>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div> 
    </>
  )
}