import React from 'react'
import Square from './Square'


function Board() {
  const board = []
  
  const getRandomNumber = max => {
    return Math.floor(Math.random() * max)
  }

  for (let i = 0; i < 3; i++) {
    const boardRow = []
    
    if (i === 0 || i === 2) {
      boardRow.push(<Square key={i+0} active={false} />)
      boardRow.push(<Square key={i+1} numCars={getRandomNumber(3)} color="bg-light" />)
      boardRow.push(<Square key={i+2} active={false}  />)
    } 

    if (i === 1) {
      boardRow.push(<Square key={i+0} numCars={getRandomNumber(3)} color="bg-light" />)
      boardRow.push(<Square key={i+1} numCars={0} color="bg-light" />)
      boardRow.push(<Square key={i+2} numCars={getRandomNumber(3)} color="bg-light" />)
    }

    board.push(<div key={i} className="d-flex flex-row bd-highlight justify-content-center"> {boardRow} </div>)
  }

  console.log(board)

  return (
    <div>
     {board}
    </div>
  )
}

export default Board
