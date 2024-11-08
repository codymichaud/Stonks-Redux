import { React } from 'react'
import '../Nav/Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineStock, AiFillPlusCircle } from 'react-icons/ai'
import { IoIosHome } from 'react-icons/io'
import { HiPresentationChartLine } from 'react-icons/hi'
import { BiLogInCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

const Navbar = () => {
  const { pathName } = useLocation
  // const { isDark } = useTheme()
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
        <div className='navbar-nav'>
            <div className='navbar-logo'>
                <h1 id='logo'>
                    <Link
                     css={{
                       color: `${isDark ? '$darkLogo' : '$lightLogo'}`,
                       boxShadow: `0px -5px 26px 9px ${isDark ? '#FF6BD5' : '#7828C8'}`
                     }}
                     to='/'>
                        Stonks <AiOutlineStock className='aiOutlineStock' size='4.25rem' />
                    </Link>
                </h1>
            </div>    
            <div className='navbar-path-links'>
                <ul>
                    <li>
                        <Link to='/'>
                            <IoIosHome size='2.50rem' />
                        </Link>
                        <motion.div
                            transition= {{ duration: 0.75 }}
                            initial= {{ width: '0%' }}
                            animate= {{ width: pathName === '/' ? '50%' : '0%' }}
                            className= 'line'
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/markets'>
                            <HiPresentationChartLine size='2.50rem' />
                            <motion.div
                                transition= {{ duration: 0.75 }}
                                initial= {{ width: '0%' }}
                                animate= {{ width: pathName === '/markets' ? '50%' : '0%' }}
                                className= 'line'
                            />
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/addStocks'>
                            <AiFillPlusCircle size='2.50rem' />
                            <motion.div
                                transition= {{ duration: 0.75 }}
                                initial= {{ width: '0%' }}
                                animate= {{ width: pathName === '/markets' ? '50%' : '0%' }}
                                className= 'line'
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='navbar-login'>
             {type} Mode
                <Switch
                    checked={isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                />
                    <ul>
                        <li>
                            <Link to='/login'>
                                <BiLogInCircle size='2.50rem' />
                                <motion.div
                                    transition= {{ duration: 0.75 }}
                                    initial= {{ width: '0%' }}
                                    animate= {{ width: pathName === '/markets' ? '50%' : '0%' }}
                                    className= 'line'
                                />
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
  )
}

export default Navbar
