import { useEffect } from 'react'
import './App.css'
import { Login } from './pages/login'
import { Products } from './pages/Products'
import { Route, Routes } from 'react-router-dom'


function App() {

  useEffect

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
