import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import global css styles
import './index.css'
// import main app component
import App from './App.jsx'

// render the app component into the root element in the HTML
createRoot(document.getElementById('root')).render(
    // everything in the app starts here
    // StrictMode is a tool for highlighting potential problems in an application
    <StrictMode>
    <App />
    </StrictMode>
)
