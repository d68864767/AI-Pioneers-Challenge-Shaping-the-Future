```javascript
// Import mongoose module
const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Compile model from schema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;
```
