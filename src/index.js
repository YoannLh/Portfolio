import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import Lexique from './pages/Lexique'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { ThemeProvider } from './context/Context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lexique" element={<Lexique />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
