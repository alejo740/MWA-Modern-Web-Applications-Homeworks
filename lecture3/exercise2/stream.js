{
    const fs = require('fs');
    const http = require('http');
    const path = require('path');

    const server = http.createServer(function (req, res) {
        console.log('Start reading async');
        const pathUrl = path.join(__dirname, '../../files/file3.txt');
        fs.createReadStream(pathUrl)
        .pipe(res)
        .on('finish', () => console.log("end---file"));
        console.log('End process');
    });
    server.listen(4000, () => console.log('Port 4000 Running...'));
}