import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
