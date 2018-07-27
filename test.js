'use strict';
//
// let new_nickname = function () {
//     let username = null;
//
//     console.log("Enter your new username(username + \"value\", exit to out):\n");
//     process.stdin.setEncoding('utf8');
//     process.openStdin().on('data', (chunk) => {
//         let data = chunk.toString();
//
//         if (data.match( /\bexit\b/i ) != null) {
//             process.exit();
//         }
//         else if (data.match( /username "([^ ]*)"/i ) != null) {
//             data = data.match( /username "([^ ]*)"/i );
//             if (data[1] === '') {
//                 console.log('Empty nickname! Try again or print "exit"')
//             }
//             else {
//                 username = data[1].replace('\n', '');
//                 console.log(`Nickname changed: ${username}`);
//                 process.exit();
//             }
//         }
//         else console.log('Unexpected command. Use the \'username "" \' or \'exit\'')
//     });
// };
//
// new_nickname();