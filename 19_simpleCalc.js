class Calculator {
    constructor() {
        this.number1 = 0;
        this.number2 = 0;
        this.result = 0;
    }

    initialize(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
        this.result = 0;
    }

    add() {
        this.result = this.number1 + this.number2;
        return this.result;
    }

    subtract() {
        this.result = this.number1 - this.number2;
        return this.result;
    }
}