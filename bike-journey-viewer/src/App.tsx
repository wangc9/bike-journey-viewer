import { Route, Routes, useNavigate } from 'react-router-dom';
import Toolbar from './features/toolbar/Toolbar';
import './App.css';
import StationList from './features/lists/StationList';

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
        <Route path="/stations" element={<StationList />} />
      </Routes>
    </>
  );
}

export default App;
