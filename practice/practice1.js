/* var http = require('http'); 
var server = http.createServer(); 

server.on('request', function (req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.write('Hello World!'); 
    res.end(); 
}); 

server.listen(4000) */


const { Observable, of, from } = require('rxjs');
const { map, filter } = require('rxjs/operators');

var obs = Observable.create(function (observer) {
    for (let i = 0; i < 100; i++) {
        observer.next(i);
    }
    observer.next('CS572');
    setTimeout(() => {
        observer.next('CS472');
        //observer.error('Something went Wrong')
        observer.complete();
    }, 3000);
});
var subscription = obs.subscribe(
    function (x) { console.log(`Value: ${x}`); },
    function (err) { console.error(err); },
    function () { console.info(`Done`); });



    of(1, 2, 3)
        .pipe(
            map((n) => n + 3),
            filter((n) => n >= 2)
        )
        .subscribe(
            (x) => console.log(x),
            null,
            () => console.log('done')
        );