function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const net = require('net');
const client = new net.Socket();
const port = 7070;
const host = '127.0.0.1';

client.connect(port, host, function() {
console.log('Connected');
client.write(getRandomArbitrary(1,10).toString());
});

client.on('data', function(data) {
console.log('Server Says : ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
    });