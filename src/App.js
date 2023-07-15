import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import GenerateImage from './components/Generator'
import { ToastBar,Toast, Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div className='main_container'>
   <Toaster/>
   
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/generate-image' element={<GenerateImage />} />

          </Routes>
        </BrowserRouter>
   
      
    </div>
  )
}

export default App
