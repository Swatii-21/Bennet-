// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <h1>GIG-CRED+</h1>
          <div className="nav-links">
            {!isAuthenticated && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register"
            element={<Register setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={
              <div className="home-page">
                <h2>Welcome to GIG-CRED+</h2>
                <p>Empowering Gig Workers Financially</p>
                {!isAuthenticated && (
                  <div className="auth-prompts">
                    <Link to="/login" className="auth-link">Login to continue</Link>
                    <span> or </span>
                    <Link to="/register" className="auth-link">Create account</Link>
                  </div>
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;