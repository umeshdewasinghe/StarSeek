import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
    </div>
  )
}

export default App