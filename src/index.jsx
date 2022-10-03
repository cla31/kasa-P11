import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Apropos from './Pages/Apropos'
import Home from './Pages/Home'
import Logement from './Pages/Logements'
import Page404 from './Pages/Page404'

//C'est ici qu'on met le routeur

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logement/:logementId" element={<Logement />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
