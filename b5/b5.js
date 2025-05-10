// cấu trúc hàm
// function dtichHCN(width, height) {
//     return width * height;
// }

// let dt1 = dtichHCN(10,20);
// console.log(dt1);

// bai 1 tinh tong
let i;
function tinh_tong(n){
    let x = 0;
    for (i = 1; i<= n; i++) {
        x+=i;
    }
    return x;
}

console.log(tinh_tong(3));

// bai2: la so nguyen to
function la_so_nguyen_to(n){
    for (i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return false; 
    }
    return true;
}

let  resultB2 = la_so_nguyen_to(5);
if (resultB2) console.log("5 là số nguyên tố"); else console.log("khphai");

// bai 3
function giaiThua(n){
    let y = 1;
    for (i = 2; i <= n; i++) {
        y *= i;
    }
    return y;
}
console.log("5! =", giaiThua(5));
// bai 4
function C_sang_F(n){
    return n*9/5+32;
}
function F_sang_C(n){
    return (n-32)*5/9;
}
console.log(C_sang_F(30));