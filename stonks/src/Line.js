import { React, Component } from 'react'
import { motion } from 'framer-motion'

export class Line extends Component {
  render () {
    return (
    <div
      viewBox='0 0 730 424'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='line-svg'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 4 }}
        d='M1.91813 424L0 420.075L184.931 210.336L366.255 416.372L550.062 112.362L550.391 112.156L728.774 0L730 4.52501L551.945 116.473L366.655 422.933L184.929 216.439L1.91813 424Z'
        stroke='#A300A3'
        strokeOpacity='0.5'
        strokeWidth='10'
      />
    </div>
    )
  }
}

export default Line
