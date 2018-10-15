class Person {
    private _firstName: string = "";
    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value.toUpperCase();
    }
}

var p = new Person();
p.firstName = "Edwin";
console.log(p.firstName);