import React from 'react'
import Home from './Components/Home'
import DetaProvider from './context/DetaProvider'

function App() {
  return (
    <DetaProvider>
      <Home />
    </DetaProvider>
  )
}

export default App
