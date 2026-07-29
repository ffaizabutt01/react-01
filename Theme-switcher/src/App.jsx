import React, { useState } from 'react'

const App = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }


  const theme = {
    container: {
      backgroundColor: isDark ? '#0a0a0a' : '#f0f2f5',
      color: isDark ? '#ffffff' : '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.5s ease',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    card: {
      backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: isDark 
        ? '0 10px 30px rgba(0,0,0,0.5)' 
        : '0 10px 30px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'all 0.5s ease',
      maxWidth: '400px',
      width: '100%'
    },
    button: {
      padding: '15px 40px',
      fontSize: '18px',
      borderRadius: '50px',
      border: 'none',
      backgroundColor: isDark ? '#ffffff' : '#1a1a1a',
      color: isDark ? '#000000' : '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: isDark 
        ? '0 4px 15px rgba(255,255,255,0.2)' 
        : '0 4px 15px rgba(0,0,0,0.2)',
      fontWeight: 'bold',
      marginTop: '20px'
    },
    toggleSwitch: {
      width: '60px',
      height: '30px',
      backgroundColor: isDark ? '#4a4a4a' : '#ccc',
      borderRadius: '30px',
      display: 'flex',
      alignItems: 'center',
      padding: '3px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: '20px auto'
    },
    toggleCircle: {
      width: '24px',
      height: '24px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transform: isDark ? 'translateX(30px)' : 'translateX(0)',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }
  }

  return (
    <div style={theme.container}>
      <div style={theme.card}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          {isDark ? '🌙' : '☀️'}
        </h1>
        
        <h2>{isDark ? 'Dark Mode' : 'Light Mode'}</h2>
        
        
        <div 
          style={theme.toggleSwitch}
          onClick={toggleTheme}
        >
          <div style={theme.toggleCircle}></div>
        </div>

        <button 
          onClick={toggleTheme}
          style={theme.button}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
          }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <p style={{ 
          marginTop: '20px', 
          opacity: '0.7',
          fontSize: '14px'
        }}>
          Click to toggle theme
        </p>
      </div>
    </div>
  )
}

export default App