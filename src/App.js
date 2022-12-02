import React from 'react'
import { Route, Routes } from 'react-router'
import './css/common.scss'

import Header from './components/Header'
import Main from './components/Main'
import New from './components/New'
import Woman from './components/Woman'
import Man from './components/Man'
import Collection from './components/Collection'
import Magazine from './components/Magazine'
import Brand from './components/Brand'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <div className='Wrapper'>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<New />} />
          <Route path='/woman' element={<Woman />} />
          <Route path='/man' element={<Man />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/magazine' element={<Magazine />} />
          <Route path='/brand' element={<Brand />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App