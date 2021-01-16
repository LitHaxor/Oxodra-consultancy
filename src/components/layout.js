/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"


const Layout = ({ children }) => {
 

  return (
    <>
      <GlobalStyle/>
      
        <main>{children}</main>
       
    </>
  )
}


export default Layout
