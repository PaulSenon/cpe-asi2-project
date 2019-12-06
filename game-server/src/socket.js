const io = require('socket.io');

class Socket{
    constructor(server){
        this.socket = undefined;
        this.ioServer = io(server);

        this.emit = this.emit.bind(this);
        this.on = this.on.bind(this);

        this.onList= [];

        this.ioServer.on('connection', (socket) => {
            console.log('CONNECTED YES TROBIEN');
            for(let i=0; i<this.onList.length; i++){
                const { name, cb } = this.onList[i];
                socket.on(name, data => {
                    return cb(data);
                });
            }
        });
    }

    emit(name, data){
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject(new Error('socket not yet initialized'));
            this.socket.emit(name, data);
            return resolve();
        });
    }

    on(name, cb){
        return new Promise((resolve, reject) => {
            // if (!this.socket) return reject(new Error('socket not yet initialized'));
            
            const keys = Object.keys(this.ioServer.io.sockets.sockets);

            for(let i=0; i<keys.length; i++){
                this.ioServer.io.sockets.sockets[keys[i]].on(name, (data) => {
                    return cb(data);
                });
                this.onList.push({name, cb});
            }
            
            return resolve();
        });
    }
}

module.exports = Socket;