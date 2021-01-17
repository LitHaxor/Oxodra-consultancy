import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips"
import Stats from "../components/stats"
import Email from "../components/email";

const IndexPage = () => (
  <Layout>
    <Hero/>
    <SEO title="Home" />
    <Trips/>
    <Testimonials/>
    <Stats/>
    <Email/>
  </Layout>
)

export default IndexPage
