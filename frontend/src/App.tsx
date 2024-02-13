import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:email" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
