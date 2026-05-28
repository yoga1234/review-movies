function createUpdateReview () {
    const inputReviewDOM = document.getElementById("inputReview");
    const inputRatingDOM = document.getElementById("inputRating");
    if (inputReviewDOM && inputRatingDOM) {
        const activeMovieId = localStorage.getItem("activeMovie");
        const currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
        reviewData[activeMovieId][currentUserUsername].review = inputReviewDOM.value; // reviewData declared in reviewData.js
        reviewData[activeMovieId][currentUserUsername].rating= inputRatingDOM.value;
        localStorage.setItem("reviewData", JSON.stringify(reviewData));
    }
}

function deleteReview() {
    const activeMovieId = localStorage.getItem("activeMovie");
    const currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
    reviewData[activeMovieId][currentUserUsername] = undefined;
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
}

function printReview() {
    const activeMovieId = localStorage.getItem("activeMovie");
    const currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
    const reviewDOM = document.getElementById("reviewContainer");
    let reviewElement = "";
    if (reviewData[activeMovieId][currentUserUsername]) {
        let currentUserReview = `insert element review`
        reviewElement = currentUserReview
    }
    for (const username in reviewData[activeMovieId]) {
        if (username === currentUserUsername) continue;
        reviewElement += `insert element review `
    }

    reviewDOM.innerHTML = reviewElement;
}

// activeMovieId = localStorage.getItem("activeMovie");
// currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
// console.log(activeMovieId, currentUserUsername);
// console.log(reviewData);
// console.log(localStorage.getItem("activeMovie"), typeof(localStorage.getItem("activeMovie")));