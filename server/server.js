const http = require("http");
const fs = require('fs');
const index = fs.readFileSync('../index.html')

const requestListener = (req,res) => {
    res.statusCode = 200;
    res.end(index)
}
const server = http.createServer(requestListener)
const startServer = (port, host) => server.listen(port, host, () => console.log(`Yeah! Visit http://${host}:${8080} for the good stuff!`));
const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer}