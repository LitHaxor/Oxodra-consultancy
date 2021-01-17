/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from './Header';
const Layout = ({ children }) => {
 

  return (
    <div>
      <GlobalStyle/>
      <Header name="OXDORA"/> 
        <main>{children}</main>
       <Footer/>
    </div>
  )
}


export default Layout
