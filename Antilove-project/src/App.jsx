import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Body from './components/body/Body'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div >
      <Header/>
     <Body/>
     <Footer/>
    </div>
  )
}

export default App
