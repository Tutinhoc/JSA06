// let array = ["Công", "Quang", "Phong", "Lam", "Duc"];
// array.splice(2,1,"Nghia");
// for (let  i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// console.log(array.indexOf("Lam"));
let hocSinh = [
    { ten: "An", tuoi: 15, lop: "10A1" },
    { ten: "Bình", tuoi: 16, lop: "11A2" },
    { ten: "Châu", tuoi: 15, lop: "10A1" }
];
hocSinh.push({ ten: "Dũng", tuoi: 17, lop: "11A3" });
for(let i = 0; i < hocSinh.length; i++) {
    console.log(hocSinh[i].ten,hocSinh[i].tuoi, "tuổi học sinh lớp", hocSinh[i].lop);
}
hocSinh[1].tuoi = 17;
console.log(hocSinh[1]);
hocSinh.splice(2,1);
for(let i = 0; i < hocSinh.length; i++) {
    console.log(hocSinh[i].ten,hocSinh[i].tuoi, "tuổi học sinh lớp", hocSinh[i].lop);
}