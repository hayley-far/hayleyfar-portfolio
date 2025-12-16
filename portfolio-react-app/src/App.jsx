import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'

function App() {
  return (
      <>
    <Header />
    <main>
       <AboutMe />
    </main>
    </>
  )
}

export default App
