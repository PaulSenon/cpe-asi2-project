var CONFIG = require('./config');
const Brocker = require('./src/brocker');
const Logger = require('./src/logger');
const io = require('socket.io')(CONFIG.port);
let brocker;
let logger = new Logger();

(async () => {

    // EXPRESS
    app.use(express.static(CONFIG.publicDir))
    app.get('/', function (req, res) {
        res.sendfile('index.html');
    });
    server.listen(CONFIG.port, () => console.log(`Listening on port ${CONFIG.port}!`));

    // BROCKER
    try {
        const brocker = await new Brocker({
            host: CONFIG.brocker.host,
            port: CONFIG.brocker.port,
        });
    } catch (e) {
        console.error(e);
    }

    // SOCKET
    const socket = await new Socket(server);

    // brocker.onMessage(CONFIG.brocker.queues.receiveFrom, message => {
    //     console.log('brocker on message', message);
    //     const data = JSON.parse(message);
    //     data['processedByNode'] = true;
    //     socket.emit('serverResponse', data);
    // });
    // socket.on('message', data => {
    //     console.log('superçamarche', data);
    // });

    socket.on('message', data => {
        console.log('io.userInfo', data)
        try {
            try {
                const data = JSON.stringify(data);
            } catch (e) { }
            // brocker.sendMessage(CONFIG.brocker.queues.sendLogs, data);
        } catch (e) {
            console.error(e);
        }
    }).catch(e => console.log);

    // socket.on('userInfo', data => {
    //     console.log('io.userInfo', data)
    //     try{
    //         try {
    //             const data = JSON.parse(data);
    //         }catch(e){}
    //         const { nom, prenom } = data;
    //         // brocker.sendMessage(CONFIG.brocker.queues.sendTo, JSON.stringify({nom, prenom}));
    //     }catch(e){
    //         console.error(e);
    //     }
    // });

    // // SOCKET.IO
    // ioServer.on('connection', function(socket){
    //   console.log('a user connected');
    //   socket.on('userInfo', function(data) {
    //     console.log('io.userInfo', data)
    //     try{
    //         const { nom, prenom } = JSON.parse(data);
    //         brocker.sendMessage(CONFIG.brocker.queues.sendTo, JSON.stringify({nom, prenom}));

    //     }catch(e){
    //         console.error(e);
    //     }
    //     // socket.emit('myEvent2', data);
    //   });
    // });


})();
