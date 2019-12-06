const { whateverToJsonString } = require('./tools');

const LOG_TYPE = {
    INFO: 'INFO',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    CRITICAL: 'CRITICAL',
};

class Logger{
    constructor(sourceName = undefined, logCb = undefined){
        this.sourceName = sourceName;
        this.logCb = logCb;

        this.send = this.send.bind(this);
        this.info = this.info.bind(this);
        this.warning = this.warning.bind(this);
        this.error = this.error.bind(this);
        this.critical = this.critical.bind(this);
    }

    info(message){
        this.send(LOG_TYPE.INFO, message);
    }

    warning(message){
        this.send(LOG_TYPE.WARNING, message);
    }

    error(message){
        this.send(LOG_TYPE.ERROR, message);
    }

    critical(message){
        this.send(LOG_TYPE.CRITICAL, message);
    }

    send(logType, message){
        const data = {
            message: whateverToJsonString(message),
            source: this.sourceName,
            logType
        };
        this.logCb 
            ? this.logCb(JSON.stringify(data)) 
            : console.log(logType, message);

    }
}

module.exports = Logger;