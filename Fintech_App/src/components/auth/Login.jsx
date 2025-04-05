import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page">
            {/* Full Screen Container */}
            <div className="full-screen-container">
                {/* Centered Content */}
                <div className="centered-content">
                    {/* Header Section */}
                    <header className="page-header">
                        <h1>GIG-CRED+</h1>
                        <p className="tagline">Empowering Gig Workers Financially</p>
                    </header>

                    {/* Login Form */}
                    <div className="auth-card">
                        <div className="auth-switch">
                            <Link to="/login" className="active">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>

                        <form className="auth-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button type="submit" className="auth-button">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Full Screen CSS */}
            <style>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .login-page {
                    height: 100vh;
                    width: 100vw;
                    overflow: hidden;
                    background: #f6f9fc;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .full-screen-container {
                    display: flex;
                    min-height: 100vh;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .centered-content {
                    width: 100%;
                    max-width: 500px;
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .page-header h1 {
                    font-size: 2.5rem;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .tagline {
                    color: #7f8c8d;
                    font-size: 1.1rem;
                }

                .auth-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    padding: 2.5rem;
                }

                .auth-switch {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                    border-bottom: 2px solid #eee;
                }

                .auth-switch a {
                    text-decoration: none;
                    color: #95a5a6;
                    font-weight: 500;
                    padding-bottom: 1rem;
                    transition: all 0.3s ease;
                }

                .auth-switch a.active {
                    color: #1abc9c;
                    border-bottom: 3px solid #1abc9c;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    color: #34495e;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .form-group input {
                    width: 100%;
                    padding: 1rem;
                    border: 2px solid #e0e7ff;
                    border-radius: 10px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus {
                    border-color: #1abc9c;
                    outline: none;
                    box-shadow: 0 0 8px rgba(26, 188, 156, 0.1);
                }

                .auth-button {
                    width: 100%;
                    padding: 1rem;
                    background: #1abc9c;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }

                .auth-button:hover {
                    background: #16a085;
                    transform: translateY(-1px);
                }

                @media (max-width: 768px) {
                    .full-screen-container {
                        padding: 1rem;
                    }

                    .auth-card {
                        padding: 1.5rem;
                        border-radius: 15px;
                    }

                    .page-header h1 {
                        font-size: 2rem;
                    }

                    .tagline {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .auth-switch {
                        gap: 1rem;
                    }

                    .form-group input {
                        padding: 0.8rem;
                    }

                    .auth-button {
                        padding: 0.9rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Login;   