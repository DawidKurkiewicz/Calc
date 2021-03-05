export default class Calc {
    constructor() {
        this.numbers = document.querySelectorAll(".num")
        this.operators = document.querySelectorAll(".operator");
        this.equal = document.querySelector(".equal");
        this.zero = document.querySelector(".zero");
        this.dot = document.querySelector(".dot");
        this.result = document.querySelector("#result");
        this.remove = document.querySelector("#delete");
        this.activeResult = false;
        this.zeroStr = "0"
        this.dotZeroStr = `${ this.zeroStr}.`
        this.regex = new RegExp(/[\W_]/);

        this.handleOperations()
    }
    handleOperations() {
        this.numbers.forEach((button) => {
            button.addEventListener("click", () => {
                this.equalClicked ? this.activeResult = true : null
                if (this.activeResult) {
                    this.result.value = button.value
                    this.activeResult = false

                } else if (result.value == "0") {
                    this.result.value = button.value

                } else {
                    this.result.value += button.value;

                }
                this.equalClicked = false

            });
        });
        this.operators.forEach((operator) => {
            operator.addEventListener("click", () => {
                if (this.result.value !== "" && this.result.value.slice(-1).match(this.regex) == null) {
                    this.result.value += operator.value;
                } else if (this.result.value.slice(-1).match(this.regex)) {
                    this.result.value = this.result.value.slice(0, -1) + operator.value
                }
                this.equalClicked = false

            });
        });
        this.zero.addEventListener("click", () => {
            if (this.equalClicked) {
                this.result.value = this.zero.value;
                this.equalClicked = false

            } else if (this.result.value !== '0') {
                this.result.value += this.zero.value;
                this.equalClicked = false
            }
        });
        this.dot.addEventListener("click", () => {

            if (result.value === "" || result.value === "0") {
                result.value = "0.";
            } else if (result.value.slice(-1).match(this.regex) && result.value.slice(-1).match(this.regex).input != ".") {
                result.value += "0.";

            } else if (result.value.slice(-1).match(this.regex) && result.value.slice(-1).match(this.regex).input === ".") {

                console.log(result.value.slice(-1).match(this.regex).input)

            } else {
                result.value += ".";
            }
            this.equalClicked = false

        });
        this.equal.addEventListener("click", () => {
            if (this.result.value !== "" && this.result.value.slice(-1).match(this.regex) == null) {
                this.result.value = eval(this.result.value);
                this.activeResult = false;
                this.equalClicked = true

            }
        });
        this.remove.addEventListener("click", () => {
            this.result.value = "";
            this.equalClicked = false

        });
    }

};