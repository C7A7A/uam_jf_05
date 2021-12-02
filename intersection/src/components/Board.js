import React from 'react'
import getRandomNumber from '../helpers/getRandomNumber'
import Square from './Square'
import { useState, useEffect, useRef } from 'react'


function Board() {
  const squareRefs = useRef([])
  const [cycle, setCycle] = useState(1)
  const cycleDuration = 5

  useEffect(() => {
    const interval = setInterval(() => {
      
      // check if cycle 2 needed
      let cycleFlag = false
      squareRefs.current.forEach((ref) => {
        if (cycle === 1 && ref.greenLight && ref.cars > 0) {
          cycleFlag = true
        }
      })

      // change light
      if (!cycleFlag) {
        squareRefs.current.forEach((ref) => {
          ref.switchBgColor()   
        })
      }

      cycleFlag ? setCycle(2) : setCycle(1)

    }, cycleDuration * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [cycle])

  return (
    <div>
      <div key={0} className="d-flex flex-row bd-highlight justify-content-center">
        <Square key={100} active={false} color="bg-dark"/>
        <Square key={101} active={true} numCars={getRandomNumber(30)} color="bg-danger" ref={(square) => {squareRefs.current[0] = square}} />
        <Square key={102} active={false} color="bg-dark" />
      </div>
      <div key={1} className="d-flex flex-row bd-highlight justify-content-center">
        <Square key={103} active={true} numCars={getRandomNumber(30)} color="bg-success" ref={(square) => {squareRefs.current[1] = square}} />
        <Square key={104} active={false} color="bg-success" />
        <Square key={105} active={true} numCars={getRandomNumber(30)} color="bg-success" ref={(square) => {squareRefs.current[2] = square}} />
      </div>
      <div key={2} className="d-flex flex-row bd-highlight justify-content-center">
        <Square key={106} active={false} color="bg-dark"/>
        <Square key={107} active={true} numCars={getRandomNumber(30)} color="bg-danger" ref={(square) => {squareRefs.current[3] = square}} />
        <Square key={108} active={false}  color="bg-dark"/>
      </div>

      <div className="row justify-content-center">
        Cycle: {cycle}
      </div>
    </div>
  )
}

export default Board