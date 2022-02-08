import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Navigation from './components/navigation/Navigation';
import SignInSignUp from './pages/signin-signup/SignInSignUp';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
