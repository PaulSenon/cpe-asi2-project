var CONFIG = require('./config');
const Brocker = require('./src/brocker');
const Logger = require('./src/logger');
const io = require('socket.io')(CONFIG.port);
let brocker;
let logger = new Logger();

(async () => {
    try{
        brocker = await new Brocker({
            host: CONFIG.brocker.host,
            port: CONFIG.brocker.port,
        });
        const sendToLoggerCb = (message => {
            brocker.sendMessage(CONFIG.brocker.queues.sendLogs, message);
        })
        logger = new Logger(CONFIG.appName, sendToLoggerCb);
        logger.info(`socket.io server UP at port ${CONFIG.port}`);
    }catch(e){
        console.error(e);
    }
    
    io.on('connect', socket => {
        logger.info(`new user connected: ${socket.id}`);
        socket.on('message', data => {
            logger.info(data);
            logger.critical("lol");
        });
    });

})();
