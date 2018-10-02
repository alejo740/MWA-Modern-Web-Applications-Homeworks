{
    const { of } = require("rxjs");
    const exercise1 = function () {
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

    const exercise2 = function () {
        ///// EXERCISE 2
        function isWeekend() {
            const todayDate = new Date();
            const day = todayDate.getDay();
            const days = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"]
            return days[day];
        }
        console.log(isWeekend());
    }

    const exercise3 = function () {
        ///// EXERCISE 3
        const item = {
            "name": "Biscuits",
            "type": "Regulras",
            "category": "food",
            "price": 2.0
        }

        const item2 = {
            "name": "Biscuits",
            "type": "Regulras",
            "category": "food",
            "price": 2.0
        }

        const applyCoupon = category => discount => item => {
            item.price -= (item.price * discount);
            return item;
        }

        const applyCoupon2 = function(category) {
            return function(discount) {
                return function(item){
                    item.price -= (item.price * discount);
                    return item;
                }
            }
        }

        let result = applyCoupon("food")(0.1)(item).price;
        console.log(result);
        
        result = applyCoupon2("food")(0.1)(item2).price;
        console.log(result);
    }

    exercise3();
}
