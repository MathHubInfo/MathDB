const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
    client: new sqlite3.Database('./cmo.db')
});
exporter.all(function (err, all) {
    var fs = require('fs');
    fs.writeFile("../src/cmo.json", JSON.stringify(all, null, 2), function(err) {
        if(err) { return console.log(err); }
        console.log("The file was saved!");
    });
});