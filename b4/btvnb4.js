// Tạo một mảng các user objects, mỗi object có thuộc tính id và tên
let users = [
    { id: 1, ten: "An" },
    { id: 2, ten: "Bình" },
    { id: 3, ten: "Chi" }
  ];

  users.push({ id: 4, ten: "Dũng" });
  
  function capNhatTen(id, tenMoi) {
    const user = users.find(user => user.id === id);
    if (user) {
      user.ten = tenMoi;
    }
  }
  capNhatTen(2, "Bảo");
  
  function xoaUser(id) {
    users = users.filter(user => user.id !== id);
  }
  xoaUser(3);
  
  // 5. Tạo một đối tượng đại diện cho một người với tên, tuổi, thành phố
  let person = {
    ten: "Lan",
    tuoi: 25,
    thanhPho: "Hà Nội"
  };
  
  person.email = "lan@example.com";
  
  delete person.tuoi;
  console.log("Danh sách users:", users);
  console.log("Thông tin person:", person)