const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

const server = http.createServer(app);

const port = process.argv[2] || 1234;

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});