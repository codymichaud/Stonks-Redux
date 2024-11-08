import React, { useRef } from 'react'
import Line from '../../Line'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../Animations'
import Recaptcha from 'react-google-recaptcha'
// import axios from 'axios'
import {
  Button,
  Input,
  Label
} from 'reactstrap'
import PropTypes from 'prop-types'

const Login = (props) => {
  const captchaKey = '6LdL9p4gAAAAADEa0jDnPaJhZ5cPh0rM5VeGHclK'
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props

  const recaptchaRef = useRef(null)

  const handleSubmit = async () => {
    // const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    // pass token to server for validation

    // const res = await axios.post(
    //   // API_URL,
    //   {
    //     fromData,
    //     captchaToken
    //   }
    // )
  }

  return (
    <motion.section
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
        className='login-section'
    >
        <div onSubmit={handleSubmit} className='login-section-container'>
            <Label>Email</Label>
            <Input
                type='email'
                autoFocus
                required
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className='error'>{emailError}</p>}
            <Label>Password</Label>
            <Input
                type='password'
                required
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className='error'>{passwordError}</p>}
                <div className='login-section-buttons'>
                    {hasAccount
                      ? (
                        <>
                        <Button
                            onClick={handleLogin}
                            className='login-section-button'
                        >
                            Login
                        </Button>
                        <p>Dont have an account?
                            <span
                                onClick={() => setHasAccount(!hasAccount)}
                            >Sign Up</span> 
                        </p>   
                        </>
                        )
                      : (
                        <>
                        <Button
                            onClick={handleSignup}
                        >Sign Up</Button>
                        <p>
                            Have an Account?
                            <span
                                onClick={() => setHasAccount(!hasAccount)}
                            >Login</span>
                        </p>
                        </>
                        )}
                    <Recaptcha
                        ref={recaptchaRef}
                        sitekey={captchaKey}
                        size='invisible'
                    />
                </div>
            <Line />
        </div>
    </motion.section>    
  )
}

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  handleLogin: PropTypes.func,
  handleSignup: PropTypes.func,
  hasAccount: PropTypes.bool,
  setHasAccount: PropTypes.func,
  emailError: PropTypes.string,
  passwordError: PropTypes.string
}

export default Login
