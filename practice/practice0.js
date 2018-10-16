const os = require('os')
var path = require('path');

//console.log(os.cpus());


var fs = require('fs');
fs.readFile(path.join(__dirname, '../files/file3.txt'),
    function (err, data) {
        console.log(err)
        setTimeout(() => {
            console.log('timeout');
        }, 0);
        setImmediate(() => {
            console.log('immediate');
        });
        process.nextTick(() => console.log('nexttick'));
    });
    console.log('asd')