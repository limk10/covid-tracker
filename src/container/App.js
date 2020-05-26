import React from 'react'
import Routes from '../routes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Container } from "shards-react";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className={'pt-5'}>
        <Routes />
      </Container>
    </BrowserRouter>
  )
}

export default App