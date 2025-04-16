import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';


// Suppress warnings in development
if (process.env.NODE_ENV === 'development') {
  console.warn = () => {}; // Override console.warn in development to suppress warnings
}

const Layout: React.FC = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
