import React from 'react'
import  Navbar  from './Component/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import Coin from './Component/Pages/Coin/Coin'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App
