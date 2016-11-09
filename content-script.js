setTimeout(function () {
    console.log('Jestem sobie content-script.js.');
    console.log('Mam dostęp do DOM Twojej zakładki.');
    console.log('Nie wierzysz? No to patrz!', { 'document.title': document.title });
}, 1000);
