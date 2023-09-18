//cargar una libreria http
const http = require('http')
const Chance = require('chance')

const chance = new Chance()


//definir un servidor
const servidor = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' })

    response.end(`Mape up,<b> ${chance.name()}</b>, hhh`)
})

//arrancamos el servidor
servidor.listen(1337, '127.0.0.1')

console.log('Servidor arrancado http://127.0.0.1:1337')
