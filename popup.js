var $content = document.getElementById('content');

$content.innerText = 'Cześć, daj mi chwilę aby się uruchomić...';

setInterval(function () {
    $content.innerText = [
        'Jestem sobie popup.js. Nie bój się, nie mam dostępu do Twoich zakładek.',
        'Żyję tak długo, jak długo te okno jest otwarte.',
        'Sięgam tak daleko, na ile pozwala mi popup.html.',
        'Jednak nie lekceważ mnie!',
        'Miłościwie nam ponujący Pan Chrome pozwala mi na nieco więcej, niż przeciętna strona.',
        '',
        'Chcesz zobaczyć, co potrafię? Zajrzyj w moją prywatną konsolę...',
        'Aby poznać bliżej content-script.js, zajrzyj w konsolę dowolnej zakładki,',
        'Aby odkryć możliwości background.js otwórz nową zakładkę.',
        '',
        'seed: ' + Math.random()
        ].join('\n');
}, 500);

console.log('Obiekt chrome, do którego mam dostęp: ', chrome);

