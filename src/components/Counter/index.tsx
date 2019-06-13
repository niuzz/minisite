import React from 'react'

export interface CounterInterface {
  value: number
}

const Counter = ({ value }: CounterInterface) => {
  return <p>clicked {value} times</p>
}

export default Counter
