let socket;
(function() {
    console.log('page loaded');

    socket = io();
    socket.on('serverResponse', function(data){
        alert(JSON.stringify(data));
    });

})();

const go = () => {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const data = { nom, prenom };

    console.log('send', data);
    socket.emit('userInfo', data);
}