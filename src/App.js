import React from 'react'
import { Routes, Route } from 'react-router'
import Details from './Components/Details'
import Navbar from './Components/Navbar'
import Table from './Components/Table'
function App() {
  return (
    <div>
    <Navbar/>


<Routes>
  <Route path ="/" element={<Table/>} > </Route>
  <Route path =":det" element={<Details/>} > </Route>
</Routes>
      
    </div>
  )
}

export default App