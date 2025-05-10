// Bài 1:
let soDau = 5;
let soSau = 8;
if (soDau >= soSau) console.log(soDau); else console.log(soSau);

// Bài 2:
let so1 = 3;
let so2 = -7;
let so3 = 2;
let tich = so1 * so2 * so3;
if (tich < 0) console.log("Dấu là -"); else console.log("Dấu là +");

// Câu 3:
let resultCL = "";
for (let i = 0; i<= 15; i++){
    if (i % 2 == 0) {
        resultCL = i + " là chẵn";
    }
    if (i % 2 != 0) {
        resultCL = i + " là lẻ";
    }
    console.log(resultCL);
}