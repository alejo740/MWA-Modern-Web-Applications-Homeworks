{
    Array.prototype.even = function() {
        setImmediate(() => {
            const result = this.filter(x => x%2 == 0);
            console.log(result);
        });
    }

    Array.prototype.odd = function() {
        setImmediate(() => {
            const result = this.filter(x => x%2 != 0);
            console.log(result);
        });
    }

    console.log('start');
    [1,2,3,4,5,6,7,8].even();
    [1,2,3,4,5,6,7,8].odd();
    console.log('end');
}