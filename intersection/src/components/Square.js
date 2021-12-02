import React from 'react'
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import checkForNewCar from '../helpers/checkForNewCar'
import getLightColor from '../helpers/getLightColor'

const Square = forwardRef(({numCars, color, active, direction}, ref) => {

  const [cars, setCars] = useState(numCars)
  const [bgColor, setBgColor] = useState(color)
  const lightColor = getLightColor(bgColor)

  useEffect(() => {
      const interval = setInterval(() => {
        if (active) {
          if (checkForNewCar()) {
            setCars(cars + 1)
          }

          if (lightColor === "green" && cars > 0) {
            setCars(cars - 1)
          }
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
  }, [cars, active, lightColor])

  const switchToGreen = () => {
    setBgColor('bg-success')
  }

  const switchToYellow = (nextLight) => {
    setBgColor('bg-warning')
    setTimeout(
      () => {
        if (nextLight === "green") switchToGreen()
        else if (nextLight === "red") switchToRed()
      }, 2000)
  }

  const switchToRed = () => {
    setBgColor('bg-danger')
  }

  useImperativeHandle(ref, () => {
    return {
      cars: cars,
      lightColor: lightColor,
      direction: direction,
      switchToYellow: switchToYellow
    }
  })

  return (
    <div className={`p-5 bd-highlight border ${bgColor} boardSquare`}>
      {active ? cars : ""}
    </div>
  )
})

export default Square
