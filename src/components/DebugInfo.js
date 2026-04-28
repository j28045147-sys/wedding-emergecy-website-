import { useState, useEffect } from 'react';

const DebugInfo = () => {
  const [info, setInfo] = useState({});
  const [testResult, setTestResult] = useState(null);
  const [testing, setTesting] = useState(false);
  
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
  
  useEffect(() => {
    setInfo({
      backendUrl: BACKEND_URL,
      nodeEnv: process.env.NODE_ENV,
      allEnvVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_')),
      currentUrl: window.location.href,
      userAgent: navigator.userAgent,
    });
  }, [BACKEND_URL]);
  
  const testConnection = async () => {
    setTesting(true);
    setTestResult(null);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/download/apk/info`);
      const data = await response.json();
      
      setTestResult({
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: data,
        headers: Object.fromEntries(response.headers.entries()),
      });
    } catch (error) {
      setTestResult({
        success: false,
        error: error.message,
        errorType: error.name,
      });
    } finally {
      setTesting(false);
    }
  };
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'white',
      border: '2px solid #333',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      maxHeight: '80vh',
      overflow: 'auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
    }}>
      <h3 style={{ marginTop: 0 }}>🔍 Debug Info</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Environment Variables:</strong>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
          {JSON.stringify(info, null, 2)}
        </pre>
      </div>
      
      <button 
        onClick={testConnection}
        disabled={testing}
        style={{
          width: '100%',
          padding: '10px',
          background: testing ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: testing ? 'not-allowed' : 'pointer',
          marginBottom: '10px',
        }}
      >
        {testing ? 'Testing...' : 'Test Backend Connection'}
      </button>
      
      {testResult && (
        <div style={{ marginTop: '15px' }}>
          <strong>Test Result:</strong>
          <pre style={{ 
            background: testResult.success ? '#d4edda' : '#f8d7da', 
            padding: '10px', 
            borderRadius: '5px',
            overflow: 'auto',
            maxHeight: '300px',
          }}>
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}
      
      <div style={{ marginTop: '15px', fontSize: '10px', color: '#666' }}>
        <strong>Quick Checks:</strong>
        <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
          <li>Backend URL set: {BACKEND_URL ? '✅' : '❌'}</li>
          <li>Is localhost: {BACKEND_URL.includes('localhost') ? '⚠️ Yes' : '✅ No'}</li>
          <li>Is production: {process.env.NODE_ENV === 'production' ? '✅ Yes' : '⚠️ No'}</li>
        </ul>
      </div>
    </div>
  );
};

export default DebugInfo;
