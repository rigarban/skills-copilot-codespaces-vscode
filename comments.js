// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Method: GET