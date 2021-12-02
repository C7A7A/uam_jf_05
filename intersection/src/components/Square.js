import React from 'react'
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import checkForNewCar from '../helpers/checkForNewCar'

const Square = forwardRef(({numCars, color, active}, ref) => {

  const [cars, setCars] = useState(numCars)
  const [bgColor, setBgColor] = useState(color)
  const [greenLight, setGreenLight] = useState(bgColor === "bg-success" ? true : false)

  useEffect(() => {
      const interval = setInterval(() => {
        if (active) {
          if (checkForNewCar()) {
            setCars(cars + 1)
          }

          if (greenLight && cars > 0) {
            setCars(cars - 1)
          }
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
  }, [cars, active, greenLight])

  const switchBgColor = () => {
      if (active &&greenLight) {
        setBgColor("bg-danger")
        setGreenLight(false)
      } else {
        setBgColor("bg-success")
        setGreenLight(true)
      }
  }

  useImperativeHandle(ref, () => {
    return {
      switchBgColor: switchBgColor,
      cars: cars,
      greenLight: greenLight
    }
  })

  return (
    <div className={`p-5 bd-highlight border ${bgColor} boardSquare`}>
      {active ? cars : ""}
    </div>
  )
})

export default Square
