import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.handleRoutes) {
      window.handleRoutes(['/', '/404']);
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-shell" data-easytag="1760914455100-react/src/App.js">
        <HashRouter>
          <div className="app-content" data-easytag="1760914455101-react/src/App.js">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
