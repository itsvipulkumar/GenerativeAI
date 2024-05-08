import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import GenerateImage from './components/Generator'
import { ToastBar, Toast, Toaster } from 'react-hot-toast'
import ImageTagger from './components/ImageTagger'
import NewsGenrator from './components/NewsGenrator'
import More from './components/More'
import Footer from './components/Footer'
import Service from './components/Service'
import AboutUs from './components/Aboutus'
import Plans from './components/Plans'



const App = () => {
  return (
    <>
      <div className='main_container'>
        <Toaster />

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/generate-image' element={<GenerateImage />} />
            <Route path='/image-tagger' element={<ImageTagger />} />
            <Route path='/more' element={<More />} />
            <Route path='/tools' element={<Service />} />

            <Route path='/news-generation' element={<NewsGenrator />} />

            <Route path='/news-generation' element={<NewsGenrator />} />


          </Routes>

        </BrowserRouter>


      </div>

    </>
  )
}

export default App
