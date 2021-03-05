/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                    /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports) {

        window.onload = function() {
            var numbers = document.querySelectorAll(".num");
            var operators = document.querySelectorAll(".operator");
            var equal = document.querySelector(".equal");
            var zero = document.querySelector(".zero");
            var dot = document.querySelector(".dot");
            var result = document.querySelector("#result");
            var remove = document.querySelector("#delete");
            var activeResult = false;
            var equalClicked = false;
            numbers.forEach(function(button) {
                button.addEventListener("click", function() {
                    equalClicked ? activeResult = true : null;
                    if (activeResult) {
                        result.value = button.value
                        activeResult = false

                    } else if (result.value == "0") {
                        result.value = button.value

                    } else {
                        result.value += button.value;

                    }
                    equalClicked = false

                });
            });
            let regex = new RegExp(/[\W_]/);

            operators.forEach(function(operator) {
                operator.addEventListener("click", function() {
                    console.log(regex)
                    console.log(operator)
                    if (result.value !== "" && result.value.slice(-1).match(regex) == null) {
                        result.value += operator.value;

                    } else if (result.value.slice(-1).match(regex)) {
                        console.log(result.value.slice(-1))
                        result.value = result.value.slice(0, -1) + operator.value


                    }
                    equalClicked = false

                })

            });

            zero.addEventListener("click", function() {
                if (equalClicked) {
                    result.value = zero.value;
                    equalClicked = false
                } else if (result.value !== '0') {
                    result.value += zero.value;
                    equalClicked = false
                }

            });

            dot.addEventListener("click", function() {
                if (result.value === "" || result.value === "0") {
                    result.value = "0.";

                } else if (result.value.slice(-1).match(regex) && result.value.slice(-1).match(regex).input != ".") {
                    result.value += "0.";

                } else if (result.value.slice(-1).match(regex) && result.value.slice(-1).match(regex).input === ".") {

                    console.log(result.value.slice(-1).match(regex).input)

                } else {
                    result.value += ".";

                }
                equalClicked = false

            });

            equal.addEventListener("click", function() {
                if (result.value !== "" && result.value.slice(-1).match(regex) == null) {
                    result.value = eval(result.value);
                    activeResult = false;
                    equalClicked = true;
                }
            });

            remove.addEventListener("click", function() {
                result.value = "";
                equalClicked = false

            });

        };


        /***/
    })
    /******/
]);