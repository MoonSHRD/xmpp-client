var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "jackal"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



save_user = function(name, password){
    var d = new Date();
    var date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    var xml = `<presence from="ortuman@localhost:5222" to="ortuman@localhost" type="unavailable"/>`;
    var sql = `INSERT INTO users(username, password, last_presence, last_presence_at, updated_at, created_at) VALUES("${name}", ${password}, '${xml}', "${date}", "${date}", "${date}");`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Created '${name}' user`);
    });
};
save_user('test', '123');


check_user = function(user_name){
    var sql = `select * from users where username ='${user_name}'`;
    con.query(sql, function(err, result) {
        if (err) {
            throw (`User ${user_name} not found`);
        }
        else {
            console.log(`User '${result}' already exist in DB`);}

    })
};
check_user('kkk');
check_user('kkkk');