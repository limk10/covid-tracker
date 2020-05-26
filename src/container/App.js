import React from 'react'
import Routes from '../routes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  )
}

export default App