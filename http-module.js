// http module

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Ritik Homepage');
    } else if (req.url === '/about') {
        res.end('Ending page');
    } else {
        res.end(`
            <h1>hii ritik here </h1>
            <p>lorem rtttt</p> 
            <a href="/">back home</a>
        `);
    }
});

server.listen(5000);

