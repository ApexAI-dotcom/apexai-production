import React, { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState('Checking backend...')
  const [backendData, setBackendData] = useState(null)

  const API_URL = '/api'

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => {
        setStatus('✅ Backend connected!')
        setBackendData(data)
      })
      .catch(() => setStatus('❌ Backend offline'))
  }, [])

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '48px' }}>🏎️ ApexAI</h1>
      
      <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>Backend Status</h2>
        <p style={{ fontSize: '18px' }}>{status}</p>
        {backendData && (
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '5px' }}>
            {JSON.stringify(backendData, null, 2)}
          </pre>
        )}
      </div>

      <button 
        onClick={() => window.open(`${API_URL}/docs`, '_blank')}
        style={{
          background: '#007bff',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        📚 API Documentation
      </button>
    </div>
  )
}

export default App
