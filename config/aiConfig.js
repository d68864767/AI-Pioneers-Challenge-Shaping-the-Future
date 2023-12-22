```javascript
// Import dotenv module
require('dotenv').config();

// AI Configuration
const aiConfig = {
  // AI Service URL
  aiServiceUrl: process.env.AI_SERVICE_URL || 'http://localhost:5000',

  // AI Service API Key
  aiServiceApiKey: process.env.AI_SERVICE_API_KEY,

  // Other AI-related configurations can go here
};

// Export the aiConfig object
module.exports = aiConfig;
```
