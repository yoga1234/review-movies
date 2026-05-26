// localStorage.clear();

let userData;
if (!localStorage.getItem("userData")) {
    userData = {
        abdzufar: {
        email: "zufarafuz@gmail.com",
        salt: "G]bbE",
        password: "Ufxx|twi67(LbggJ" //Password12#
        },
        ramarama: {
        email: "rama57@gmail.com",
        salt: "8yYk+",
        password: "Wfmfxnf87&=~^p0" // Rahasia32!
        }
    }
    localStorage.setItem("userData", JSON.stringify(userData))
} else {
    userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);
}

const allEmails = [];
for (const key in userData) {
    allEmails.push(userData[key].email)
}