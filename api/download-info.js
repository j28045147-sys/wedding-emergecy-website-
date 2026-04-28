// Vercel Serverless Function - Proxy to backend
// This allows HTTPS Vercel site to communicate with HTTP backend

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    // Get backend URL from environment variable
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://51.20.89.101';
    const apiUrl = `${backendUrl}/api/download/apk/info`;
    
    console.log('Proxying request to:', apiUrl);
    
    // Fetch from backend
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log('Backend response:', data);
    
    // Return the data
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch from backend',
      message: error.message 
    });
  }
}
