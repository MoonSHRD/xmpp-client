var xmpp = require('simple-xmpp');

xmpp.on('online', function(data) {
    console.log('Connected with JID: ' + data.jid.user);
    console.log('Yes, I\'m connected!');
});

xmpp.on('chat', function(from, message) {
    console.log(from);
    console.log(message);
    xmpp.send(from, 'echo: ' + message);
});

xmpp.on('error', function(err) {
    console.error(err);
});

xmpp.on('subscribe', function(from) {
    // if (from === 'a.friend@gmail.com') {
    //     xmpp.acceptSubscription(from);
    // }
    xmpp.acceptSubscription(from);
    console.log(from);
});

xmpp.on('close', function() {
    console.log('connection has been closed!');
});

xmpp.on('buddy', function(jid, state, statusText) {
    console.log("---------------%s is now '%s' (%s)", jid, state, statusText);
    xmpp.send(jid, "hello v rot");


    process.stdin.setEncoding('utf8');
    process.openStdin().on('data', (chunk) => {
        var data = chunk.toString();
        console.log(data);
        if (data.search(/send [^ ]* ".*"/i) !== -1) {
            var data = data.match( /send ([^ ]*) "(.*)"/i );
            var addr = data[1];
            var msg = data[2];
            console.log(addr);
            console.log(msg);
            xmpp.send(addr, msg);
        }
    })
    // xmpp.getVCard(argv[2], function(vcard) {
    //     console.log(vcard);
    //     process.exit(0);
    // });
});


function generate_byte() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


xmpp.connect({
    jid					: "Test_user@localhost",
    // password		    : generate_byte(),
    password            : ' ',
    signature           : "there'll a signature",
    host				: '192.168.1.10',
    port				: 5222
});
