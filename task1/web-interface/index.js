const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const FILE = 'index.html';

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, FILE), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  const url = `http://localhost:${PORT}`;
  switch (process.platform) {
    case 'darwin': exec(`open ${url}`); break;      // macOS
    case 'win32': exec(`start ${url}`); break;      // Windows
    default: exec(`xdg-open ${url}`); break;        // Linux
  }
});
