import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import global css styles
import './index.css'
// import main app component
import App from './App.jsx'
import icon from './assets/logo.PNG';

function setIcon(url) {
  let link = document.querySelector('link[rel~="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = url
}

setIcon(icon)

// render the app component into the root element in the HTML
createRoot(document.getElementById('root')).render(
    // everything in the app starts here
    // StrictMode is a tool for highlighting potential problems in an application
    <StrictMode>
    <App />
    </StrictMode>
)
