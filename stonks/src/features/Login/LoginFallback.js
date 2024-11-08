import { React, Component } from 'react'
import Line from '../../Line'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../Animations'
import { AiOutlineStock } from 'react-icons/ai'
import { Button } from 'reactstrap'
import './LoginFallback.scss'

export class LoginFallback extends Component {
  constructor (props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout () {
    console.log('set this up to log a user out bitchhhh')
  }

  render () {
    return (
        <div className='login-fallback-section'>
          <motion.section 
            className='hero'
            variants={ pageAnimation } 
            initial='hidden'
            animate='show'
            exit='exit'
          >
            <nav className='login-fallback-nav'>
              <h2>
              Stonks <AiOutlineStock className='aiOutlineStock' size='4.25rem' />
              </h2>
              <Button onClick={this.handleLogout}>Logout</Button>
            </nav>
            <Line />
          </motion.section>
          
        </div>
    )
  }
}

export default LoginFallback
