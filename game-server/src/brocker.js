const stompit = require('stompit');

class Brocker {
    constructor ({ host, port }){
        this.client = undefined;
        this.connectOptions = { host, port };

        this.connect = this.connect.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        return new Promise((resolve, reject) => {
            let retry = setInterval(async () => {
                console.log('TRY CONNECT TO BROCKER');
                try{
                    this.client = await this.connect();
                    clearInterval(retry);
                    console.log('CONNECTION TO BROCKER SUCCESSFUL');
                    resolve(this)
                }catch(e){
                    console.log('CONNECTION TO BROCKER FAILED. Will retry in 5 seconds');
                }
            },5000);
            // this.client = await this.connect();
            // return resolve(this);
        });
    }

    connect(){
        return new Promise((resolve, reject) => {
            stompit.connect(this.connectOptions, (error, client) => {
                if (error) return reject(error);
                return resolve(client);
            });
        });
    }

    onMessage(queue, cb){
        return new Promise((resolve, reject) => {
            if (!this.client) return reject(new Error('client not yet initialized'));
            const headers = {
                'destination': queue
            }
            this.client.subscribe(headers, (error, message) => {
                if (error) return reject(error);

                message.readString('utf-8', (error, body) => {
                    if (error) return reject(error);

                    // TODO maybe parse JSON here ?
                    cb(body);
                });
            });
            return resolve();
        });
    }

    sendMessage(queue, dataString){
        return new Promise((resolve, reject) => {
            if (!this.client) return reject(new Error('client not yet initialized'));
            const headers = {
                'destination': queue
            }
            const frame = this.client.send(headers);
            frame.write(dataString);
            frame.end();
            return resolve();
        });
    }
}

module.exports = Brocker;