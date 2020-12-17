import React from "react"
import {Link} from 'gatsby'
import Navbar from '../comonents/Navbar'
import Footer from '../comonents/Footer'

export default function Home() {
  return(
  <div>
    <Navbar/>
    Hello world!
    <Link to="/blog/">blog page</Link>
    <Footer/>
  </div>
  )
}
