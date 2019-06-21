const express = require('express');
const http = require('http');
const path = require('path');

const port = process.argv[2] || 1234;

function startServer() {
    const app = express();

    app.use(express.static(path.join(__dirname, 'dist')));

    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`Running at http://localhost:${port}`);
    });
}

startServer();