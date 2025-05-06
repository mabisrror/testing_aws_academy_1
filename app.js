// Importar el módulo HTTP de Node.js
const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    // Establecer el código de estado HTTP y el tipo de contenido de la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Enviar un mensaje de respuesta
    res.end('Hello World!');
});

// Hacer que el servidor escuche en el puerto 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
