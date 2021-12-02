import getRandomNumber from "./getRandomNumber"
import Square from "../components/Square"

const initSquares = (greenLigh) => {
  let i = 0, j = 1000

  const board = [
    <Square key={i+j++} active={false} color="bg-dark"/>, 
    <Square key={i+j++} numCars={getRandomNumber(10)} color="bg-danger" greenLigh={greenLigh} />,
    <Square key={i+j++} active={false} color="bg-dark" />,

    <Square key={i+j++} numCars={getRandomNumber(10)} color="bg-success" greenLigh={greenLigh}/>, 
    <Square key={i+j++} active={false} color="bg-light" />,
    <Square key={i+j++} numCars={getRandomNumber(10)} color="bg-success" greenLigh={greenLigh}/>,

    <Square key={i+j++} active={false} color="bg-dark"/>, 
    <Square key={i+j++} numCars={getRandomNumber(10)} color="bg-danger" greenLigh={greenLigh}/>,
    <Square key={i+j++} active={false}  color="bg-dark"/>
  ]

  return board
}

export default initSquares