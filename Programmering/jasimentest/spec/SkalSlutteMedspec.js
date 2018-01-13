"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = require("../numbers");
describe("Suite", function () {
    it("It should say 1 if the number is 1", function () {
        var thenumber = 1;
        expect(numbers_1.number(thenumber)).toBe("tallet er 1");
    });
    it("It should say 2 if the number is 2", function () {
        var thenumber = 2;
        expect(numbers_1.number(thenumber)).toBe("tallet er 2");
    });
    it("It should say 3 if the number is 3", function () {
        var thenumber = 3;
        expect(numbers_1.number(thenumber)).toBe("tallet er 3");
    });
    it("It should say 3 if the number is 3", function () {
        var thenumber = 4;
        expect(numbers_1.number(thenumber)).toBe("tallet er støre end 3");
    });
});
