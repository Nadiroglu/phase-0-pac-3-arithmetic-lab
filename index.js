function add(a, b) {
return a + b;
}
console.log(add(1200, 29));

function subtract(a,b){
    return a - b;
}
console.log(subtract(2, 454));

function multiply(a,b) {
    return a * b;
}
console.log(multiply(394320, 1));

function divide(a, b) {
return a / b;
}
console.log(divide(7.553398058252427, 1));

function increment(n) {
    return n + 1 ;
}
console.log(increment(798));

function decrement(n) {
    return n-1;
}
console.log(decerement(795));

function makeInt(n) {
    const parsedInt = parseInt(n,10);
    return parsedInt;
  }
  console.log(parseInt("10"));

  function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    return parsedFloat;
  }