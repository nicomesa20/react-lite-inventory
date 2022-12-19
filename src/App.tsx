import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
