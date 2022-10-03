import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Apropos from "./Pages/Apropos";
import Page404 from "./Pages/Page404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//C'est ici qu'on met le routeur
ReactDOM.render( 
<BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
  
)