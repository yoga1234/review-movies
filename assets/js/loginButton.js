const loginButton = document.getElementById("login-button");

function cekLoginStatus() {
  let userLogin = localStorage.getItem("currentUser");

  if (userLogin.length === 0) {
    return false;
  }

  return true;
}

function loginLogout() {
  let loginStatus = cekLoginStatus();

  // removing button behaviour and add click listener

  // change the text
  if (loginStatus === true) {
    loginButton.innerHTML = "LOGOUT";
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();

      if (loginStatus === true) {
        loginButton.href = "#";

        if (confirm("Apakah Anda ingin logout?") === true) {
          localStorage.setItem("currentUser", "");
          location.reload();
        }
      }
    });
  }
  if (loginStatus === false) {
    loginButton.innerHTML = "LOGIN";
    loginButton.href = "./pages/daftarlogin.html";
  }
}

loginLogout();
