let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!localStorage.getItem("users")){
        alert("chau co nguoi dung nao, vui long dang ki truoc");
        return;
    } else {
        let users = JSON.parse(localStorage.getItem("users"));
        console.log(users);

        let existingUser  = users.find((user) => {
            return user.email === email && user.password === password;
        });

        if (existingUser) {
            localStorage.setItem("currentUser", JSON.stringify(existingUser));
            window.location.href = "/index.html";
        } else {

            alert("Dang nhap sai roi");
        }
    }
});