/// Câu 1:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let signal = 5;
let chan = [];
let le = [];
let sumChan = 0;
let sumLe = 0;
let count = 0;

for (let i =0 ; i < array.length; i++) {
    if (i % 2 == 0) {
        le.push(array[i]);
        sumLe += array[i];
    } else {
        chan.push(array[i]);
        sumChan += array[i];
    }
    if (array[i] > signal) count++;
}

console.log(count);
 
/// Câu 2:

let so = 5;
let tamGiac = "";
for (i = 1; i<= 5; i++) {
    tamGiac = tamGiac + i;
    console.log(tamGiac);
}

let chuoi = "abc";
let result = chuoi;
let daiChuoi = chuoi.length;
for (let j = daiChuoi - 2; j >= 0; j--){
    result = result + chuoi[j];
}
console.log(result);