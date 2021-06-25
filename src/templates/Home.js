import React from 'react'
import { useHomeQuery } from './queries/home'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HireContainer from '../components/HireContainer'
import LRContainer from '../components/LRContainer'

const Home = () => {
  const { HeroBox, HeroImage, LR, TheVenues } = useHomeQuery()

  return (
    <>
      <Layout>
        <Hero data={HeroBox} image={HeroImage} />
        <LRContainer data={LR} />
        <HireContainer data={TheVenues} />
      </Layout>
    </>
  )
}

export default Home