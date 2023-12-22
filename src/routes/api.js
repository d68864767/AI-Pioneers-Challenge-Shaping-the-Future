```javascript
// Import necessary modules
const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

// Route to start the AI challenge
router.post('/startChallenge', async (req, res) => {
  try {
    const result = await aiService.startChallenge();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: `Error starting AI Challenge: ${error}` });
  }
});

// Route to check if the technology is patentable
router.post('/isPatentable', async (req, res) => {
  try {
    const technology = req.body.technology;
    const result = await aiService.isPatentable(technology);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: `Error checking patentability for ${technology}: ${error}` });
  }
});

// Export the router
module.exports = router;
```
