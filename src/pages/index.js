import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Stats from "../components/stats"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <SEO title="Home" />
    <Trips/>
    <Testimonials/>
    <Stats/>
  </Layout>
)

export default IndexPage
