import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/bodyComponents/Home'
import { ProductListingPage } from './components/bodyComponents/ProductListingPage'
import { SingleProductPage } from './components/bodyComponents/SingleProductPage'
import { Search } from './components/bodyComponents/smallComponents/Search'
import { Category } from './components/bodyComponents/smallComponents/Category'


function App() {

  // pls take this url for backend if deployed one taking lots time to load or issue in starting a server

  // VITE_BACKEND_URL=http://localhost:3000
  
  // write this above line in .env file which is created after the src folder (not in src folder)

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/products' element={<ProductListingPage/>} />
         <Route path='/product' element={<SingleProductPage />} />
         <Route path='/search' element={<Search/>} />
         <Route path='/searching/:category' element={<Category/>} />
         
      </Routes>
    </>
  )
}

export default App
