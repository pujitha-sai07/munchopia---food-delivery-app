import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import MoodProvider from './context/MoodContext.jsx' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <MoodProvider> 
        <App />
      </MoodProvider>
    </StoreContextProvider>
  </BrowserRouter>
)
