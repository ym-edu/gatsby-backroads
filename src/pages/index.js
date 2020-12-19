import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import { MdSpa } from "react-icons/md"

export default function Home() {
  return(
  <>
    <Layout>
      Hello world!
      <Link to="/blog/">blog page <MdSpa/></Link>
    </Layout>
  </>
  )
}
