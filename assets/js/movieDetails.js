function createUpdateReview () {
    inputReviewDOM = document.getElementById("inputReview");
    inputRatingDOM = document.getElementById("inputRating");
    if (inputReviewDOM && inputRatingDOM) {
        activeMovieId = localStorage.getItem("activeMovie");
        currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
        reviewData[activeMovieId][currentUserUsername].review = inputReviewDOM.value; // reviewData declared in reviewData.js
        reviewData[activeMovieId][currentUserUsername].rating= inputRatingDOM.value;
        localStorage.setItem("reviewData", JSON.stringify(reviewData));
    }
}

function deleteReview() {
    activeMovieId = localStorage.getItem("activeMovie");
    currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
    reviewData[activeMovieId][currentUserUsername] = undefined;
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
}

// activeMovieId = localStorage.getItem("activeMovie");
// currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
// console.log(activeMovieId, currentUserUsername);
// console.log(reviewData);
// console.log(localStorage.getItem("activeMovie"), typeof(localStorage.getItem("activeMovie")));