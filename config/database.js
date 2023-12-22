```javascript
// Import mongoose module
const mongoose = require('mongoose');

// Database URL
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/ai_pioneers_challenge';

// Connect to the database
const connectDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (err) {
    console.log('Error connecting to database: ', err);
  }
};

// Export the connectDatabase function
module.exports = connectDatabase;
```
