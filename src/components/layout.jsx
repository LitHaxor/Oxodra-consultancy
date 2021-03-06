/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from './Header';
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./Footer";

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
