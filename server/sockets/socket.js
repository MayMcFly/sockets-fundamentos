const { io } = require('../server')


io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        menasaje: 'Bienvenido'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* 
        if (mensaje.usuario) {
            callback({
                reps: 'todo salio bien'
            });
        } else {
            callback({
                reps: 'todo salio mal!!!!'
            });
        } 
        */


    });
});