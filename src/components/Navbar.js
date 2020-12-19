import React, {useState} from 'react'
import styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import socialLinks from '../constants/social-links'
import logo from '../images/logo.svg'

export default function Navbar() {
  const [toggleNav,setToggleNav] = useState(false);
  const toggle = () => {
    setToggleNav(prev => !toggleNav)
  }

  return (
    <React.Fragment>
      <h1>I am Navbar</h1>
    </React.Fragment>
  )
}
