import React from 'react'
import { Route, Routes } from 'react-router'
import './css/common.scss'

import Header from './components/Header'
import Main from './components/Main'
import NewArrival from './components/NewArrival'
import NewAcc from './components/NewAcc'
import Sale from './components/Sale'
import Trend from './components/Trend'
import Outer from './components/Outer'
import Knit from './components/Knit'
import Woman from './components/Woman'
import Man from './components/Man'
import New from './components/New'
import Story from './components/Story'
import Brand from './components/Brand'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <>
      <div className='Wrapper'>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new-arrival' element={<NewArrival />} />
          <Route path='/new-acc' element={<NewAcc />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/trend' element={<Trend />} />
          <Route path='/outer' element={<Outer />} />
          <Route path='/knit' element={<Knit />} />
          <Route path='/woman' element={<Woman />} />
          <Route path='/man' element={<Man />} />
          <Route path='/new' element={<New />} />
          <Route path='/story' element={<Story />} />
          <Route path='/brand' element={<Brand />} />

        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App