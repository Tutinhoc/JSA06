console.log("hello world");
let age = 25;
let winners = 2;
let name = "Duke";
let isEligible = false;

// dat ten theo quy tac camelCase

let firstName = "Van Tu";
let lastName = "Nguyen";
let email = "yendo.06021987@gmail.com";
let createDate = "01/01/2025";
let updateDate = "28/03/2025";
let deleteDate = "29/03/2025";

console.log(firstName, '\n', lastName, '\n', email, '\n', createDate, '\n', updateDate, '\n', deleteDate);


// khai bao cac kieu du lieu: String, number, boolean, array, object, null, undefined

let string = "Nguyen Van Tu";
let number = 123456;
let boolean = true;
let object = {
    firsttName: "Van Tu",
    lasttName: "Nguyen",
    age: 17
};

let array = [1, 2, 3, 4, 5, 6];

// thao tac voi chuoi
let ho = "Nguyen";
let ten = "Van Tu";
let hoVaten = ho + ' ' + ten;
console.log(hoVaten);

// ham dem ki tu
let countName = hoVaten.length;
console.log(countName);
// tach chuoi

let gioQua = "chuoi,tao,quyt,cam,dua,buoi";
let arrayGioQua = gioQua.split(",");

console.log(gioQua);
console.log(arrayGioQua);

// viet hoa viet thuong

let vietHoa = hoVaten.toUpperCase();
let vietThuong = hoVaten.toLowerCase();
console.log(vietHoa, '\n', vietThuong);

// kiem tra kieu du lieu cua bien
let checkType = typeof hoVaten;
console.log(checkType);

// loai bo khoang trang

let khoangTrang = "           Nguyen Van Tu         ";
let xoaKhoangTrang = khoangTrang.trim();

console.log(xoaKhoangTrang);

// baitap
//bai1
let bai1 = "nguyen van tu";
let array1 = bai1.split(" ");
let result = "";
for (let i = 0; i < array1.length; i++) {
    result = result + ' ' + array1[i][0].toUpperCase() + array1[i].slice(1);
}
console.log(result);

//bai2
let c1Bai2 = "xin";
let c2Bai2 = "chao"
let bai2 = c1Bai2 + ' ' + c2Bai2;
console.log(bai2);

//bai3 xoa khoang trang thua

let bai3 = " Nguyen    Van   Tu";
// replace
let replaceVanTu = bai3.replace(/\s+/g, " ");
console.log(replaceVanTu);

// join => chuyen mang array thanh string

let array2 = ["ban", "an", "com", "chua"];
let array2join = array2.join(" ");
console.log(array2join);

