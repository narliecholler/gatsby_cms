import React from 'react'
import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'
import LRContainer from '../components/LRContainer'
import HireContainer from '../components/HireContainer'

const Home = () => {

  return (
    <>
      <Layout>
        <HeroImage />
        <LRContainer className='LRHome' />
        <HireContainer />
      </Layout>
    </>
  )
}

export default Home