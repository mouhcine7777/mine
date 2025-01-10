import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Background.jpeg';
import StartButton from './start.png';
import Step1Image from './STEP 1.jpg';
import Step2Image from './STEP2.jpg';

// Step 1 Page Component
const Step1Page = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showDarkScreen, setShowDarkScreen] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setTimeout(() => {
      setShowDarkScreen(true);
    }, 10000);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!isStarted && !showDarkScreen && (
        <div className="start-screen">
          <img
            src={StartButton}
            alt="Start"
            className="start-button"
            onClick={handleStart}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}

      {isStarted && !showDarkScreen && (
        <div className="image-screen">
          <img
            src={Step1Image}
            alt="Step 1"
            className="fullscreen-image"
            style={{ 
              width: '11  5%', 
              height: '115%', 
              objectFit: 'cover',
              transform: 'rotate(90deg)',
              margin: '-7.5%'
            }}
          />
        </div>
      )}

      {showDarkScreen && <div className="dark-screen" style={{ background: 'black', height: '100vh', width: '100%' }}></div>}
    </div>
  );
};

// Step 2 Page Component
const Step2Page = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showDarkScreen, setShowDarkScreen] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setTimeout(() => {
      setShowDarkScreen(true);
    }, 10000);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!isStarted && !showDarkScreen && (
        <div className="start-screen">
          <img
            src={StartButton}
            alt="Start"
            className="start-button"
            onClick={handleStart}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}

      {isStarted && !showDarkScreen && (
        <div className="image-screen">
          <img
            src={Step2Image}
            alt="Step 2"
            className="fullscreen-image"
            style={{ 
              width: '115%', 
              height: '115%', 
              objectFit: 'cover',
              transform: 'rotate(90deg)',
              margin: '-7.5%'
            }}
          />
        </div>
      )}

      {showDarkScreen && <div className="dark-screen" style={{ background: 'black', height: '100vh', width: '100%' }}></div>}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/" element={<Step1Page />} />
      </Routes>
    </Router>
  );
};

export default App;