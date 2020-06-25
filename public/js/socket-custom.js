var socket = io();

// 
socket.on('connect', function() {
    console.log('conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: ' Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor ', resp);

});