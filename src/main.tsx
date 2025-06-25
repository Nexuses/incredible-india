import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import PoliciesPage from './PoliciesPage.tsx'
import SponsorsPage from './SponsorsPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
