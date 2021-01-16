import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <Header /> 
    <Hero/>
    <SEO title="Home" />
    
    <Trips/>
    <Testimonials/>
  </Layout>
)

export default IndexPage
