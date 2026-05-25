localStorage.clear();
console.log("Hei");
let userData;
if (!localStorage.getItem("userData")) {
    userData = {
        abdzufar: {
        email: "zufarafuz@gmail.com",
        password: "tespassword"
        },
        ramarama: {
        email: "rama57@gmail.com",
        password: "admin"
        }
    }
    localStorage.setItem("userData", JSON.stringify(userData))
} else {
    console.log("Oi!");
    userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
}