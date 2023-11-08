import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './content/header.js';
import Main from './content/main.js';
import MapPage from './components/MapPage.js';
import DescriptionPage from './components/DescriptionPage.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Header />
                <MapPage />
              </>
            }
          />
          <Route path="/description-page" element={<DescriptionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
