import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx';
import Search from './pages/search.jsx';

import './index.css';
import './components/Navbar.css';
import './pages/MoviesGrid.css'
import './pages/Movie.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Filmes'>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)
