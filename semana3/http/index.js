const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Servidor ok'
    }));
})

server.listen(8080)

console.log('Servidor corriendo en puerto 8080')