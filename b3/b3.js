let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i] % 2 == 0) console.log(array1[i]);
}
// ham filter để lọc phần tử trong mảng theo điều kiện
let result = array1.filter((item) => {
    return item % 2 == 0;
}
)
console.log(result);
// hàm find
let phanTuLe = array1.find((item) => {
  return item%2 !== 0;
})
console.log(phanTuLe);
//??????? Tìm hiểu sự khác nhau giữa filter và map
// toan tu chia lay dư
let a = 100;
let b = 7;

let chiaLayDu = a % b;
let cong = a+b;
let tru = a-b;
let nhan = a*b;
let chia = a/b;
console.log(cong);
console.log(tru);
console.log(nhan);
console.log(chia);
console.log(chiaLayDu);

// == chỉ so sánh giá trị của hai biến
// === so sánh cả giá trị và kiểu dữ liệu của hai biến
// && % += ==
// thực hành câu điều kiện
let scoop;
if (scoop >= 5) console.log("Ăn nhanh lên, kem sắp tan chảy!");
else if (scoop == 3) console.log("Kem sắp hết!");
else if (scoop == 2) console.log("Lần một!");
else if (scoop == 1) console.log("Lần hai!");
else if (scoop == 0) console.log("Hết rồi!");
else console.log("Vẫn còn nhiều kem, hãy đến lấy thêm!")
let n = prompt("Nhập vào số n:");
while ( n < 0) {
    n = prompt("Hãy nhập lại n:");
}
if (n > 0) console.log("n là số dương.");