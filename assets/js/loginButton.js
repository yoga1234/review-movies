const loginButton = document.getElementById("login-button");

function cekLoginStatus() {
  let userLogin = localStorage.getItem("currentUser");

  if (userLogin === null || userLogin.length === 0) {
    return false;
  }

  return true;
}

function loginLogout() {
  let loginStatus = cekLoginStatus();

  // removing button behaviour and add click listener

  // change the text
  if (loginStatus === true) {
    let userLogin = JSON.parse(localStorage.getItem("currentUser"));

    loginButton.innerHTML = userLogin.username;
    loginButton.addEventListener("mouseenter", () => {
      loginButton.innerHTML = `<span style="font-size: 17px">klik untuk logout</span>`;
    });
    loginButton.addEventListener("mouseleave", () => {
      loginButton.innerHTML = userLogin.username;
    });
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();

      if (loginStatus === true) {
        loginButton.href = "#";

        // sweetalert confirm
        Swal.fire({
          title: "Anda yakin?",
          text: "Anda mencoba logout",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Logout",
        }).then((result) => {
          if (result.isConfirmed)
            Swal.fire({
              title: "LOGOUT",
              text: "Logout berhasil.",
              icon: "success",
            }).then(function () {
              localStorage.setItem("currentUser", "");
              location.reload();
            });
        });
        // sweet alert confirm
      }
    });
  }
  // pathname : '/pages/movielist.html', '/pages/movieDetails.html'
  if (loginStatus === false) {
    loginButton.innerHTML = "LOGIN";
    if (
      window.location.pathname.search("movielist.html") !== -1 ||
      window.location.pathname.search("moviedetails.html") !== -1
    ) {
      loginButton.href = "./daftarlogin.html";
    } else {
      loginButton.href = "./pages/daftarlogin.html";
    }
  }
}

loginLogout();
