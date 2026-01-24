import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import components
import Header from './components/Header/Header.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'

// react functional component
function App() {
    //return statement to define what is rendered on screen
    //<> </> is a react fragment that allows multiple elements to be returned without adding extra nodes to the DOM
  return (
      <>
    <Header />
    {/* main section of the page */}
    <main>
       <AboutMe />
    </main>
    </>
  )
}

export default App
