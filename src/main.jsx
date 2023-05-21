import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './components/Context/UserContext'
import { ToastContainer } from 'react-toastify'
import { PurchasedProvider } from './components/Context/PurchasedContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PurchasedProvider>
          <App />
          <ToastContainer/>
        </PurchasedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
