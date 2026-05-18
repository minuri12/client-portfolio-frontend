import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      color: '#ffffff',
      backgroundColor: '#000000'
    }}>
      <h1>404 — Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/home" style={{ marginTop: '1rem', color: '#0af7ff', textDecoration: 'none' }}>
        ← Back to Home
      </a>
    </div>
  );
};

export default NotFound;