import React from 'react'
import getRandomNumber from '../helpers/getRandomNumber'
import Square from './Square'
import { useState, useEffect, useRef } from 'react'


function Board() {
  const squareRefs = useRef([])
  const [cycle, setCycle] = useState(1)
  const cycleDuration = 6

  useEffect(() => {
    const interval = setInterval(() => {
      
      let cycleFlag = false
      let carTrafficFlag = false
      let carTrafficUD = false

      squareRefs.current.forEach((ref) => {
        // check if cycle 2 needed
        if (cycle === 1 && ref.lightColor === "green" && ref.cars > 0) {
          cycleFlag = true
        }
        // check for any traffic
        if (ref.cars > 0) {
          carTrafficFlag = true

          // check for traffic UD
          if (ref.direction === "UD") carTrafficUD = true
        }
      })

      // no traffic/no traffic UD - green light for LEFT-RIGHT 
      if (!carTrafficFlag || !carTrafficUD) {
        squareRefs.current.forEach((ref) => {
          if (ref.direction === "LR" && ref.lightColor !== "green") {
            ref.switchToYellow("green")
          } else if (ref.direction === "UD" && ref.lightColor === "green") {
            ref.switchToYellow("red")
          }
        })
      } // traffic - if cycle 2 -> change lights
      else {
        if (!cycleFlag) {
          squareRefs.current.forEach((ref) => {
            if (ref.lightColor === "green") {
              ref.switchToYellow("red")
            } else if (ref.lightColor === "red") {
              ref.switchToYellow("green")
            }
          })
        }
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
        <Square key={101} active={true} numCars={getRandomNumber(30)} direction={"UD"} color="bg-danger" ref={(square) => {squareRefs.current[0] = square}} />
        <Square key={102} active={false} color="bg-dark" />
      </div>
      <div key={1} className="d-flex flex-row bd-highlight justify-content-center">
        <Square key={103} active={true} numCars={getRandomNumber(30)} direction={"LR"} color="bg-success" ref={(square) => {squareRefs.current[1] = square}} />
        <Square key={104} active={false} color="bg-success" />
        <Square key={105} active={true} numCars={getRandomNumber(30)} direction={"LR"} color="bg-success" ref={(square) => {squareRefs.current[2] = square}} />
      </div>
      <div key={2} className="d-flex flex-row bd-highlight justify-content-center">
        <Square key={106} active={false} color="bg-dark"/>
        <Square key={107} active={true} numCars={getRandomNumber(30)} direction={"UD"} color="bg-danger" ref={(square) => {squareRefs.current[3] = square}} />
        <Square key={108} active={false}  color="bg-dark"/>
      </div>

      <div className="row justify-content-center">
        Cycle: {cycle}
      </div>
    </div>
  )
}

export default Board