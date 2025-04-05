import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDatabase,
    faPlus,
    faUserTie,
    faRightToBracket,
    faWallet
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    return (
        <div style={styles.body}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <div style={styles.heroText}>
                    <h1 style={styles.heroHeading}>Hi, I'm<br />Giuseppe Boinega!</h1>
                    <p style={styles.heroParagraph}>I'm a Front-end Developer.</p>
                    <button style={styles.heroButton}>Download Resume</button>
                </div>
                <div style={styles.heroImage}>
                    <img
                        src="https://i.ibb.co/DYd9cLV/dev-photo.jpg"
                        alt="Developer"
                        style={styles.heroImg}
                    />
                </div>
            </div>

            {/* Main Content Container */}
            <div style={styles.container}>
                {/* Storage Warning Card */}
                <div style={styles.card}>
                    <h4 style={styles.cardHeading}>
                        <FontAwesomeIcon icon={faDatabase} /> Storage Usage
                    </h4>
                    <progress
                        value="0"
                        max="100"
                        style={styles.progressBar}
                    />
                    <p style={styles.storageWarning}>
                        Demo mode allows limited tracking. Register to securely save and sync your financial data.
                    </p>
                </div>

                {/* Summary Cards */}
                <div style={styles.cardGroup}>
                    {[
                        { title: 'Mist Days', value: '$0.00', color: 'green' },
                        { title: 'Working Days', value: '15 days' },
                        { title: 'Rating', value: '⭐ 4.5 / 5' },
                        { title: 'Avg. Income', value: '$1000.00', color: 'green' }
                    ].map((card, index) => (
                        <div key={index} style={styles.card}>
                            <h4 style={styles.cardHeading}>{card.title}</h4>
                            <p style={{ ...styles.cardValue, color: card.color || 'inherit' }}>
                                {card.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Transaction Form */}
                <div style={{ ...styles.card, ...styles.formCard }}>
                    <h4 style={styles.cardHeading}>Add New Entry</h4>
                    <div style={styles.formRow}>
                        <div style={styles.formGroup}>
                            <label>Category</label>
                            <select style={styles.formControl}>
                                <option>Income</option>
                                <option>Expense</option>
                                <option>Withdrawal</option>
                            </select>
                        </div>
                        <div style={styles.formGroup}>
                            <label>Amount (₹)</label>
                            <input
                                type="number"
                                placeholder="e.g. 1500"
                                style={styles.formControl}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="e.g. Uber ride payout, groceries..."
                                style={styles.formControl}
                            />
                        </div>
                    </div>
                    <button style={styles.submitButton}>
                        <FontAwesomeIcon icon={faPlus} /> Add Transaction
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        margin: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: '#f5f7fa',
    },
    hero: {
        background: '#0c2d48',
        color: 'white',
        padding: '3rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
    },
    heroText: {
        flex: 1,
        minWidth: '250px',
    },
    heroHeading: {
        fontSize: '2.5rem',
        margin: 0,
    },
    heroParagraph: {
        fontSize: '1.2rem',
        margin: '1rem 0',
    },
    heroButton: {
        background: 'white',
        color: '#0c2d48',
        padding: '0.6rem 1.2rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    heroImage: {
        flex: 1,
        minWidth: '200px',
        textAlign: 'center',
    },
    heroImg: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '4px solid white',
    },
    container: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    cardGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    card: {
        background: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        flex: 1,
        minWidth: '200px',
    },
    cardHeading: {
        marginBottom: '0.5rem',
        fontWeight: 600,
        fontSize: '1rem',
        color: '#2c3e50',
    },
    cardValue: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    formCard: {
        padding: '1.5rem',
    },
    formRow: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    formGroup: {
        flex: 1,
        minWidth: '200px',
    },
    formControl: {
        padding: '0.6rem',
        margin: '0.4rem 0',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        width: '100%',
    },
    submitButton: {
        marginTop: '1rem',
        padding: '0.7rem 1.5rem',
        background: '#3498db',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    progressBar: {
        width: '100%',
    },
    storageWarning: {
        fontSize: '0.9rem',
        color: '#777',
        marginTop: '0.5rem',
    },
};

export default Dashboard;