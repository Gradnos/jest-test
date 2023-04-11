export function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}
export function divide(a,b){
    return a/b;
}
export function multiply(a,b){
    return a*b;
}
export function analyzeArray(arr){
    let length = arr.length;
    let average = arr.reduce((a,b) => a+b, 0) / length;
    let min = arr.reduce((a,b) => Math.min(a,b), Infinity);
    let max = arr.reduce((a,b) => Math.max(a,b), -Infinity);
    return {average, min, max, length};
}