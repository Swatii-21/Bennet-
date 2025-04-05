import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        bankDetails: '',
        phone: '',
        address: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await api.post('/auth/register', formData);
            // Redirect to login
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="login-page">
            <div className="full-screen-container">
                <div className="centered-content">
                    <div className="auth-card">
                        <div className="auth-switch">
                            <Link to="/login">Login</Link>
                            <Link to="/register" className="active">Register</Link>
                        </div>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    required
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Age</label>
                                <input
                                    type="number"
                                    placeholder="Your age"
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    required
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="auth-button">
                                Register
                            </button>
                        </form>

                        <div className="bottom-text">
                            Already have an account?{' '}
                            <Link to="/login" className="bottom-text-link">
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

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
                    height: 100vh;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }

                .centered-content {
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                }

                .auth-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    padding: 2rem;
                    width: 100%;
                }

                .auth-switch {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
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
                    margin-bottom: 1.2rem;
                }

                .form-group label {
                    display: block;
                    color: #34495e;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .form-group input {
                    width: 100%;
                    padding: 0.9rem;
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
                    margin-top: 1.5rem;
                }

                .auth-button:hover {
                    background: #16a085;
                    transform: translateY(-1px);
                }

                .bottom-text {
                    margin-top: 1.5rem;
                    text-align: center;
                    color: #64748b;
                }

                .bottom-text-link {
                    color: #1abc9c;
                    text-decoration: none;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .full-screen-container {
                        padding: 0.5rem;
                    }

                    .auth-card {
                        padding: 1.5rem;
                        border-radius: 15px;
                    }

                    .form-group input {
                        padding: 0.8rem;
                    }
                }

                @media (max-width: 480px) {
                    .auth-switch {
                        gap: 1rem;
                    }

                    .auth-button {
                        padding: 0.9rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}