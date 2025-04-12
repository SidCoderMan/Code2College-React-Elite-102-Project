

import express from 'express'; 
import fetch from 'node-fetch'; 
import cors from 'cors';


const app = express();
const yelpKey = 'k0VDA2g4O5YuYVKZAqW2baQf62MEdkuU18JX4r3YtB6IMqmenKz0OW2THmtdP52LZMNQBdbLCG_WacbSSsLVTpIKEYWs2atVq5qRkL2-Qzg2ypiAMW-IV8_T0VL0Z3Yx';  // Replace with your Yelp API key

app.use(cors()); 

app.get('/api/yelp', async (req, res) => {
  const { location = 'austin', term = 'food' } = req.query; 

  try {
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
      headers: {
        'Authorization': `Bearer ${yelpKey}`, 
      },
    });
    const data = await response.json();  
    res.json(data);  
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});