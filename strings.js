export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string){
    return string.split("").reverse().join("");
}

export function caesarCipher(string, shift){
    let arr = string.split("");
    for(let i = 0; i<arr.length; i++){
        let code = arr[i].charCodeAt(0);
        if(code > 64 && code < 91){
            code = (code - 65 + shift) % 26 + 65;
        }
        if(code > 96 && code < 123){
            code = (code - 97 + shift) % 26 + 97;
        }
        arr[i] = String.fromCharCode(code);

    }
    console.log(arr);
    return arr.join("");

}

caesarCipher("defend the east wall of the castle", 1);