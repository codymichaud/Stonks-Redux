import React, { useEffect, useState } from 'react'
import './App.scss'
import Nav from '../src/features/Nav/Navbar'
import Home from '../src/pages/Home'
import Markets from '../src/pages/Markets'
import AddStocks from '../src/pages/AddStocks'
import StockDetail from '../src/pages/StockDetail'
import { Routes, Route, useLocation } from 'react-router-dom'
import fire from './firebase'
import Login from '../src/features/Login/Login'
import LoginFallback from '../src/features/Login/LoginFallback'
import LoginRequest from '../src/features/Login/LoginRequest'
import { AnimatePresence } from 'framer-motion'
import { NextUIProvider, createTheme, getDocumentTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { configureStore } from '@reduxjs/toolkit'
import reducer from '../src/reducers/index'

const store = configureStore(reducer)

console.log(store.getState())

store.dispatch({
  type: 'ADD_STOCK',
  text: 'Apple'
})
console.log(store.getState())

const lightTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      lightLogo: '#2E0F4D',
      lightLogoShadow: '',
      lightLogoHover: '',
      lightTextColor: '',
      lightBgContrast: ''

    },
    space: {},
    fonts: {}
  }
})

const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      darkLogo: '$purple600',
      darkLogoShadow: '#FF6BD5',
      darkLogoHover: '#571D91',
      darkTextColor: '#ECEDEE',
      darkBgContrast: '#16181A'

    },
    space: {},
    fonts: {}
  }
})

function App () {
  const [isDark, setIsDark] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  console.log('some users', user)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  
  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((error) => {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/user-disabled' || error.code === 'auth/user-not-found') {
          setEmailError(error.message)
        } else if (error.code === 'auth/wrong-password') {
          setPasswordError(error.message)
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, setPassword)
      .then((error) => {
        if (error.code === 'auth/email-already-in-use' || error.code === 'auth/invalid-email') {
          setEmailError(error.message)
        } else if (error.code === 'auth/weak-password') {
          setPasswordError(error.message)
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    // fire.auth()
    if (user) {
      clearInputs()
      setIsLoggedIn(true)
      setUser(user)
    } else {
      setUser('')
    }
  }
  
  useEffect(() => {
    authListener()
  }, [])

  const location = useLocation()

  const [stocks, setStocks] = useState([])
  const [formObject, setFormObject] = useState({
    name: '',
    units: 0
  })

  useEffect(() => {
    // you can use any storage
    const theme = window.localStorage.getItem('data-theme')
    setIsDark(theme === 'dark')

    const observer = new MutationObserver((mutation) => {
      const newTheme = getDocumentTheme(document?.documentElement)
      setIsDark(newTheme === 'dark')
    })

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <NextThemesProvider>
      <NextUIProvider
        theme={isDark ? darkTheme : lightTheme}
      >
        <div className='App global-style'>
          <Nav />
          <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home />} />
          <Route path='/markets' exact element={<Markets /> } />
          <Route path='/addstonks' element={<AddStocks
                stocks={stocks}
                setStocks={setStocks}
                formObject={formObject}
                setFormObject={setFormObject}
              />} />
          <Route path='/login' element={isLoggedIn
            ? (
              <LoginFallback handleLogout={handleLogout} />
              )
            : (
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
              )} />          
          <Route path='/:id' element={<StockDetail />} />
          <Route path='/login-request' element={<LoginRequest />} />
        </Routes>
          </AnimatePresence>
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App
