chrome.tabs.onCreated.addListener(function(tab) {
    var text = [
        'Cześć, jestem background.js. Działam w tle, zawsze, 24h/7, nawet przy zamkniętym popupie!',
        'Mam dostęp do wszystkiego... no może nie całkiem.',
        'Mogę tyle, na ile pozwala mi manifest.json.',
        'W tym momencie mam władzę nad Twoimi tabami.',
        'Właśnie próbujesz otworzyć: ' + tab.url,
        'Masz otwartych zakładek: ' + tab.index
    ].join('\n');

    alert(text);
});
