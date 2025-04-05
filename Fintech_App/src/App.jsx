// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        {/* Navigation */}
        <nav className="main-nav">
          <h1 className="nav-title">GIG-CRED+</h1>
          <div className="nav-links">
            {!isAuthenticated && (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
              </>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="content-container">
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
                <div className="welcome-screen">
                  <div className="welcome-content">
                    <h2 className="welcome-title">Welcome to GIG-CRED+</h2>
                    <p className="welcome-subtitle">Empowering Gig Workers Financially</p>
                    <div className="auth-options">
                      <Link to="/login" className="auth-btn primary">Login to continue</Link>
                      <span className="divider">or</span>
                      <Link to="/register" className="auth-btn secondary">Create account</Link>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>

        {/* Global Styles */}
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          html, body, #root {
            height: 100%;
          }

          .main-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background: #f8fafc;
          }

          .main-nav {
            padding: 1.5rem 2rem;
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-title {
            color: #1e293b;
            font-size: 1.8rem;
            font-weight: 700;
          }

          .nav-links {
            display: flex;
            gap: 1.5rem;
          }

          .nav-link {
            color: #64748b;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .nav-link:hover {
            color: #1abc9c;
          }

          .content-container {
            flex: 1;
            display: flex;
          }

          .welcome-screen {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(to bottom right, #f0fdfa, #f8fafc);
          }

          .welcome-content {
            text-align: center;
            max-width: 600px;
            width: 100%;
          }

          .welcome-title {
            color: #1e293b;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          .welcome-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }

          .auth-options {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          .auth-btn {
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 300px;
          }

          .auth-btn.primary {
            background: #1abc9c;
            color: white;
            border: 2px solid #1abc9c;
          }

          .auth-btn.secondary {
            background: transparent;
            color: #1abc9c;
            border: 2px solid #1abc9c;
          }

          .auth-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(26, 188, 156, 0.15);
          }

          .divider {
            color: #94a3b8;
            position: relative;
            width: 100%;
            max-width: 300px;
            margin: 1rem 0;
          }

          .divider::before,
          .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #e2e8f0;
            margin: 0 1rem;
          }

          @media (max-width: 768px) {
            .main-nav {
              padding: 1rem;
              flex-direction: column;
              gap: 1rem;
            }

            .nav-title {
              font-size: 1.5rem;
            }

            .welcome-title {
              font-size: 2rem;
            }

            .auth-btn {
              padding: 0.8rem 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .welcome-screen {
              padding: 1rem;
            }

            .welcome-title {
              font-size: 1.8rem;
            }

            .welcome-subtitle {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;