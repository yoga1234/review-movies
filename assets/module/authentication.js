
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
}

// console.log(isValidEmail("abdallah@asdasd.com"));

function registerClick() {
    const registerEmail = document.getElementById(`registerEmail`).value
    const registerUsername = document.getElementById(`registerUsername`).value
    const registerPassword = document.getElementById(`registerPassword`).value

    if (!isValidEmail(registerEmail)) {
        Swal.fire({
            icon: "error",
            title: "Alamat email tidak valid",
            text: "Mohon koreksi kembali alamat email yang Anda masukkan."
        });
    } else if (!isValidPassword(registerPassword)) {
        Swal.fire({
            icon: "error",
            title: "Alamat email tidak valid",
            text: "Mohon koreksi kembali alamat email yang Anda masukkan."
        });
    }
}

function loginClick() {
    const loginUsername = document.getElementById(`loginUsername`).value
    const loginPassword = document.getElementById(`loginPassword`).value

    // console.log("tes",username, password, "tes");
    if (loginUsername === "" || loginPassword === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Silakan isi kolom username dan password."
        });
    } else if (userData[loginUsername] === undefined || userData[loginUsername].password !== loginPassword) {
        Swal.fire({
            icon: "error",
            title: "Akun tidak ditemukan",
            text: "Mohon koreksi kembali username dan password yang Anda masukkan."
        });
    } else if (userData[loginUsername].password === loginPassword) {
            Swal.fire({
            icon: "success",
            title: "Login berhasil"
        });
    }
}

function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    if (loginForm.classList.contains("d-none")) {
        // console.log("login form hidden");
        loginForm.classList.remove("d-none");
        registerForm.classList.add("d-none");
        document.getElementById("registerEmail").value = "";
        document.getElementById("registerUsername").value = "";
        document.getElementById("registerPassword").value = "";
        
    } else {
        loginForm.classList.add("d-none");
        registerForm.classList.remove("d-none");
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
    }
}
