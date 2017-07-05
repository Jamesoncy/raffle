class AnimalES6 {
    constructor() {
        this.name = "test";
    }

    doSomething() {
        console.log("I'm a " + this.name);
    }
}

exports.module = new AnimalES6;
