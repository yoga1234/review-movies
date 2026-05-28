let reviewData;
if (!localStorage.getItem("reviewData")) {
    reviewData = {
        101: {
            abdzufar: {
                review: "T.E.A.R.S. Absolute masterpiece. You will be begging for more!",
                rating: 10
            },
            ramarama: {
                review: "Kalo lu nonton ini dan lu ga nangis, something is very wrong with you...",
                rating: 10
            }
        }
    }
    localStorage.setItem("reviewData", JSON.stringify(reviewData))
} else {
    reviewData = JSON.parse(localStorage.getItem("reviewData"));
    // console.log(reviewData);
}