import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.handleRoutes) {
      window.handleRoutes(['/']);
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-shell" data-easytag="id001-react/src/App.js">
        <BrowserRouter>
          <div className="app-content" data-easytag="id002-react/src/App.js">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
