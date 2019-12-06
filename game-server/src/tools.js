
const whateverToJsonString = (whatever => {
    try {whatever = JSON.stringify(whatever)}catch(e){}
    return whatever;
});

const whateverToObject = (whatever => {
    try {whatever = JSON.parse(whatever)}catch(e){}
    return whatever;
});

module.exports = {
    whateverToJsonString,
    whateverToObject,
};