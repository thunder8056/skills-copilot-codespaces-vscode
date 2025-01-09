// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create a comment object
const comment = {
  id: 1,
  username: 'Alice',
  content: 'Hello World!'
}