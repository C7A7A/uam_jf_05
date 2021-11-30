import React from 'react'

function Square({numCars, color, active=true}) {

  if (!active) {
    numCars = 0
    color="bg-dark"
  }

  return (
    <div className={`p-5 bd-highlight border ${color} boardSquare`}>
      {active ? numCars : ""}
    </div>
  )
}

export default Square
