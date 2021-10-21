function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const net = require('net');
const port = 7070;
const host = '127.0.0.1';
const server = net.createServer();
server.listen(port, host, () => {
console.log('TCP Server is running on port ' + port + '.');
});
server.on('connection', function(sock) 
{
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) 
    {
        console.log('DATA : ' + data);
        var arrWords = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        var arrAnswer = "";
        for(var i = 0; i < data; i++)
        {
            arrAnswer += (arrWords[getRandomArbitrary(0,10)].toString() + ' ');
        }
        sock.write(arrAnswer);
    });

    sock.on('end', function() {
        console.log('Closing connection with the client');
    });

    sock.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});