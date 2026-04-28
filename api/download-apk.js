// Vercel Serverless Function - Proxy APK download to backend

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
    const apiUrl = `${backendUrl}/api/download/apk`;
    
    console.log('Proxying APK download to:', apiUrl);
    
    // Fetch from backend
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const error = await response.json();
      res.status(response.status).json(error);
      return;
    }
    
    // Get the file as buffer
    const buffer = await response.arrayBuffer();
    
    // Set headers for download
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', 'attachment; filename=OrganizeApp.apk');
    res.setHeader('Content-Length', buffer.byteLength);
    
    // Send the file
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to download from backend',
      message: error.message 
    });
  }
}
