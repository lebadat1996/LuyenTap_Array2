let addString = prompt("Hãy nhập vào 1 chuỗi ");
let array = addString.split("");
for (let i = 0; i < array.length; i++) {
    if (array[i] === "-") {
        array[i] = "_";
    }
}
let result = array.join("");
alert(result);