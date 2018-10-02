{
    const { of } = require("rxjs");
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

    const applyCoupon2 = function (category) {
        return function (discount) {
            return function (item) {
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
