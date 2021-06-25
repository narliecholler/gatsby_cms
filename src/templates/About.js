import React from 'react'
import useAboutQuery from './queries/about'
import Layout from '../components/Layout'
import PageHeading from '../components/PageHeading'
import Member from '../components/Member'

const About = () => {
  const { Person, PersonTwo } = useAboutQuery()

  return (
    <Layout>
      <PageHeading
        pageHeading='Who Are We?'
      />
      <Member data={Person} />
      <Member data={PersonTwo} reverse />
    </Layout>
  )
}

export default About
