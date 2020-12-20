import React from "react"
import {Link} from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'

export default function Home() {
  const title = 'continue exploring'
  const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  return(
    <Layout>
      <SimpleHero>
        <Banner title={title} info={info}>
          <Link to={`/tours/`} className='btn-white'>explore tours</Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}
