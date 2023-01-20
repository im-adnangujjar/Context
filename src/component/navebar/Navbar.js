import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { NavbarStyle } from './style'
import { theme } from '../../constant/style/variable.config'

function Navbar() {
    return (
        <NavbarStyle theme={theme}>


            <div className={'container'} >
                <NavLink className={'navbarLink'} to="/">
                    <img className={'logo'} src={logo} alt='logo' />
                </NavLink>
                <div>

                    <ul className={'navList'}>
                        <li >
                            <NavLink className={'navbarLink'} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={'navbarLink'} to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={'navbarLink'} to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={'navbarLink'} to='/services'>
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </NavbarStyle>
    )
}

export default Navbar