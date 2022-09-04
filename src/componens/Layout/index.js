import React from 'react'
import Main from '../Main'
import Header from '../Header'
import styled from "styled-components";


function Layout() {
  return (
    <LayoutS>
      <Header/>
      <Main/>
    </LayoutS>
  )
}

export default Layout

const LayoutS = styled.div`
    height: 100vh;
`