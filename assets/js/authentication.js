function checkRegistrationUsername() {
    const registerUsername = document.getElementById(`registerUsername`)
    if (Object.keys(userData).includes(registerUsername.value) || !registerUsername.value) {
        registerUsername.classList.add("is-invalid");
        registerUsername.classList.remove("is-valid");
    } else {
        registerUsername.classList.add("is-valid");
        registerUsername.classList.remove("is-invalid");
    }
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
}

function checkRegistrationPassword() {
    const registerPassword = document.getElementById(`registerPassword`)
    if (!isValidPassword(registerPassword.value)) {
        registerPassword.classList.add("is-invalid");
        registerPassword.classList.remove("is-valid");
    } else {
        registerPassword.classList.add("is-valid");
        registerPassword.classList.remove("is-invalid");
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
;
    return emailRegex.test(email);
}

function checkRegistrationEmail() {
    const registerEmail = document.getElementById(`registerEmail`);
    if (!isValidEmail(registerEmail.value) || allEmails.includes(registerEmail.value)) {
        registerEmail.classList.add("is-invalid");
        registerEmail.classList.remove("is-valid");
    } else {
        registerEmail.classList.add("is-valid");
        registerEmail.classList.remove("is-invalid");
    }
}

function shiftCharacter(character) {
    let currentCode = character.charCodeAt(0);
    let newCode = currentCode + 5;
    return String.fromCharCode(newCode);
}

function encryptShift(text) {
    const letterArr = text.split('');
    const shiftedArr = letterArr.map(function(letter) {
        return shiftCharacter(letter);
    });
    const finalString = shiftedArr.join('');
    return finalString;
}

function generateSalt(length = 5) {
    let salt = "";
    for (let i = 0; i < length; i++) {
        const max = 126;
        const min = 33;
        const range = max - min + 1; // rentang untuk simbol, karakter, dan huruf di unicode
        const saltCode = Math.floor(Math.random() * range) + min;
        salt += String.fromCharCode(saltCode);
    }
    return salt;
}

function registerClick() {
    const registerUsername = document.getElementById(`registerUsername`);
    const registerPassword = document.getElementById(`registerPassword`);
    const registerEmail = document.getElementById(`registerEmail`);

    if (registerEmail.classList.contains("is-valid") && registerPassword.classList.contains("is-valid") && registerUsername.classList.contains("is-valid")) {
        let salt = generateSalt();
        userData[registerUsername.value] = {
            username: registerUsername.value,
            email: registerEmail.value,
            salt: salt,
            password: encryptShift(registerPassword.value + salt)
        }
        currentUser = userData[registerUsername.value];
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("userData", JSON.stringify(userData));
        Swal.fire({
            icon: "success",
            title: "Registrasi berhasil",
            text: "Silakan klik tombol di bawah untuk lanjut."
        }).then(function () {
            // console.log(userData);
            window.location.href = "../index.html"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Input invalid",
            text: "Mohon koreksi kembali data yang Anda masukkan."
        });
    }
}

function checkLoginUsername() {
    const loginUsername = document.getElementById(`loginUsername`)
    if (!loginUsername.value) {
        loginUsername.classList.add("is-invalid");
    } else {
        loginUsername.classList.remove("is-invalid");
    }
}

function checkLoginPassword() {
    const loginPassword = document.getElementById(`loginPassword`)
    if (!loginPassword.value) {
        loginPassword.classList.add("is-invalid");
    } else {
        loginPassword.classList.remove("is-invalid");
    }
}

function loginClick() {
    const loginUsername = document.getElementById(`loginUsername`)
    const loginPassword = document.getElementById(`loginPassword`)

    if (loginUsername.value === "" || loginPassword.value === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Silakan isi kolom username dan password."
        });
    } else if (userData[loginUsername.value] === undefined || userData[loginUsername.value].password !== encryptShift(loginPassword.value + userData[loginUsername.value].salt)) {
        Swal.fire({
            icon: "error",
            title: "Akun tidak ditemukan",
            text: "Mohon koreksi kembali username dan password yang Anda masukkan."
        });
        console.log(loginPassword.value);
    } else if (userData[loginUsername.value].password === encryptShift(loginPassword.value + userData[loginUsername.value].salt)) {
        currentUser = userData[loginUsername.value]
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        Swal.fire({
            icon: "success",
            title: "Login berhasil"
        }).then(function () {
            window.location.href = "../index.html"
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
