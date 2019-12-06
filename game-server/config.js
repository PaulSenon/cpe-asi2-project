module.exports = {
    port: process.env.SERVER_PORT || 8080,
    publicDir: './www',
    appName: 'game-server',
    brocker: {
        host: process.env.BROCKER_HOST || '127.0.0.1',
        port: process.env.BROCKER_PORT || '61613',// 61613   61616
        user: process.env.BROCKER_USER || 'admin',
        password: process.env.BROCKER_PWD || 'admin',
        queues: {
            sendLogs: process.env.MQ_OUT_LOGS, 
        },
    }
}