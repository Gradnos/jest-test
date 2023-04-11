import * as calculator from "./calculator.js";

test("add numbers", ()=>{
    expect(calculator.add(5,4)).toBe(9);
});


test("subtract numbers", ()=>{
    expect(calculator.subtract(5,9)).toBe(-4);
});

test("divide numbers", ()=>{
    expect(calculator.divide(5,2)).toBeCloseTo(2.5);
});

test("multiply numbers", ()=>{
    expect(calculator.multiply(5,2)).toBe(10);
});



test("Analyze array", ()=>{
    expect(calculator.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});