{
    const { of } = require("rxjs");
    ///// EXERCISE 1
    Array.prototype.removeDuplicates1 = function () {
        return this.filter((value, index, arr) => arr.indexOf(value) == index);
    };

    Array.prototype.removeDuplicates2 = function () {
        const arr = this;
        return new Promise(function (resolve) {
            resolve(arr.filter((value, index, arr) => arr.indexOf(value) == index));
        });
    };

    Array.prototype.removeDuplicates3 = async function () {
        let result = await this.filter((value, index, arr) => arr.indexOf(value) == index);
        return result;
    };

    Array.prototype.removeDuplicates4 = function () {
        let result = of(this.removeDuplicates2())
        return result;
    };

    let data = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
    console.log(data);

    console.log("Expected output:");
    console.log("[ 4, 1, 5, 7, 2, 3, 6 ]");
    console.log("---------");

    console.log("ES6 - Solution:");
    let result = data.removeDuplicates1();
    console.log(result);

    console.log("Promise - Solution:");
    result = data.removeDuplicates2();
    result.then(data => console.log(data + ", ")).then(data => console.log("---Result promise solution --"));
    console.log("Promise - END Solution:");

    console.log("Async/Await - Solution:");
    result = data.removeDuplicates3();
    result.then(data => console.log(data)).then(data => console.log("---Result Await/async"));
    console.log("Async/Await - END Solution:");

    console.log("Observable - Solution:");
    result = data.removeDuplicates4();
    result.subscribe(x => x.then(data => console.log(data)).then(data => console.log("---Result Observable")));
    console.log("Observable - END Solution:");
}
