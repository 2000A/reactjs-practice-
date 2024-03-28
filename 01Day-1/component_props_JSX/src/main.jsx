import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//react creates its own virtual dom with the help of createRoot method which requires html element
//which is then rendered meaning App is getting attached in main.jsx using render() method all of this gets
//attached to index.html 
//