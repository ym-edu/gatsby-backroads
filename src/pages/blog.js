import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function blog() {
  return (
     <Layout>
      hello from blog page
      <Link to="/">Home</Link>
     </Layout>
  )
}
