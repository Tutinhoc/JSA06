// Câu 1
var city = "Hà Nội";
let age = 25;

const PI = 3.14;

let temperature = 30;
let greeting = "Chào buổi sáng!";
let isJavaScriptFun = true;
let nothing = null;
let notDefined = undefined;
let numbers = [1, 2, 3, 4, 5];
let person = "Nguyễn Văn Tú";

let greetingUppercase = "greeting".toUpperCase();
let greetingReplaced = "Hello";
greetingReplaced = greetingReplaced.replace("Hello", "Good afternoon");
console.log(greetingUppercase);
console.log(greetingReplaced);

// Câu 2
let ten = "Văn Tú";
let ho = "Nguyễn";
let hoVaTen = ho + ' ' + ten;
let tendem = hoVaTen.substring(7, 10);
let nameLength = hoVaTen.length;

let fruit = prompt("Nhập tên loại trái cây yêu thích của bạn:");
console.log(fruit.toUpperCase());

let tenNguoiDung = "Nguyen Van A";
let tuoiNguoiDung = 50;
console.log("Tên bạn là", tenNguoiDung, "và bạn", tuoiNguoiDung, "tuổi.");

let sentence = prompt("Hãy nói gì đó đi nào...");
let lengthSentence = sentence.length;
console.log(lengthSentence);