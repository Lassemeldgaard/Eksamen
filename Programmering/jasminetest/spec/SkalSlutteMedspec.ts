import {number} from '../numbers';
describe("Suite", () => {
    it("It should say 1 if the number is 1", () => {
        let thenumber = 1
        expect(number(thenumber)).toBe("tallet er 1")
    })
    it("It should say 2 if the number is 2", () => {
        let thenumber = 2
        expect(number(thenumber)).toBe("tallet er 2")
    })
    it("It should say 3 if the number is 3", () => {
        let thenumber = 3
        expect(number(thenumber)).toBe("tallet er 3")
    })
    it("It should say 3 if the number is 3", () => {
        let thenumber = 4
        expect(number(thenumber)).toBe("tallet er støre end 3")
    })
})