import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Toolbar from './features/toolbar/Toolbar';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate('/');
  };

  const handleStationClick = () => {
    navigate('/stations');
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/wanc9/bike-journey-viewer';
  };

  return (
    <>
      <Toolbar
        handleMainClick={handleMainClick}
        handleStationClick={handleStationClick}
        handleGitHubClick={handleGitHubClick}
      />
      <Routes>
        <Route path="/" element={<h1>Welcome!</h1>} />
        <Route path="/stations" element={<h1>Stations</h1>} />
      </Routes>
    </>
  );
}

export default App;
