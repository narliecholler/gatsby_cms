import React from 'react'
import Layout from '../components/Layout'
import PageHeading from '../components/PageHeading'
import MusicTable from '../components/MusicTable'
import music from '../content/music.json'

const Repertoire = () => (
  <Layout>
    <PageHeading pageHeading='Our Repertoire' />
    <MusicTable data={music} />
  </Layout>
)

export default Repertoire