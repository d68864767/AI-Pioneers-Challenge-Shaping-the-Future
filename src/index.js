// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const aiService = require('./services/aiService');
const { dbUrl, aiConfig } = require('../config');

// Initialize express app
const app = express();

// Connect to the database
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

// Initialize AI service
aiService.init(aiConfig);

// Use API routes
app.use('/api', apiRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
