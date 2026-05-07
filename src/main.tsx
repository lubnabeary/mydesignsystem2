import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Styleguide from './pages/Styleguide.tsx'
import Components from './pages/Components.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/my-design-system">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app/styleguide" element={<Styleguide />} />
        <Route path="/app/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
