import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialLinks from '../constants/social-links'
import {Link} from 'gatsby'
import {FaRProject} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((item, index) => {
          return <Link to={item.path} key={index}>{item.text}</Link>
        })}
      </ul>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return <Link to={item.url} key={index}>{item.icon}</Link>
        })}
      </div>
      <div className={styles.copyright}>
        copyright &#169; backroads travel company {new Date().getFullYear()}. all rights reserved
      </div>
    </footer>
  )
}
