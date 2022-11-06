import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './global.css'
import { store } from './redux-toolkit/store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = {store}><App /></Provider>
    
    
  </React.StrictMode>
)
