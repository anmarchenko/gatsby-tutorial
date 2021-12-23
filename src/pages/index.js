import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I am Andrey Marchenko, software developer.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/image.jpg"
      />
    </Layout>
  )
}

export default IndexPage
