import React from 'react'
import Heading from '../Heading'
import PageHeader from './style'

const PageHeading = ({
  pageHeading
}) => {

  return (
    <PageHeader>
      <Heading heading='h1' text={pageHeading} align='center' />
    </PageHeader>
  )
}

export default PageHeading
