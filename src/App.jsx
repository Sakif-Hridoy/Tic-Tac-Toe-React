function Square({value}){
  function handleClick(){
    console.log('Clicked')
  }
  return (<button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9">{value}</button>)
}

export default function Board(){
  return(
    <>
    <div>
      <Square value="1"></Square>
      <Square value="2"></Square>
      <Square value="3"></Square>
    </div>
    <div>
      <Square value="4"></Square>
      <Square value="5"></Square>
      <Square value="6"></Square>
    </div>
    <div>
      <Square value="7"></Square>
      <Square value="8"></Square>
      <Square value="9"></Square>
    </div> 
    </>
  )
}