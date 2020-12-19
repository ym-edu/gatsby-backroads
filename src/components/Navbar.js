import React, {useState} from 'react'
import {Link} from 'gatsby'
import styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import socialLinks from '../constants/social-links'
import logo from '../images/logo.svg'

export default function Navbar() {
  const [toggleNav,setToggleNav] = useState(false);
  const toggle = () => {
    setToggleNav((prev) => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo"/>
          <button type="button" className={styles.logoBtn} onClick={toggle}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={toggleNav ?
          `${styles.navLinks} ${styles.showNav}` :
          `${styles.navLinks}`}>
            {links.map((item, index) => {
              return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
              )
            })}
        </ul>
        <div className={styles.navSocialLinks}>
            {socialLinks.map((item, index) => {
              return (
                <a key={index} href={item.url} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              )
            })}
        </div>
      </div>
    </nav>
  )
}
