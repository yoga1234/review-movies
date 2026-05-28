function createUpdateReview() {
  const inputReviewDOM = document.getElementById("inputReview");
  const inputRatingDOM = document.getElementById("inputRating");
  if (inputReviewDOM && inputRatingDOM) {
    const activeMovieId = localStorage.getItem("activeMovie");
    const currentUserUsername = JSON.parse(
      localStorage.getItem("currentUser"),
    ).username;
    reviewData[activeMovieId][currentUserUsername].review =
      inputReviewDOM.value; // reviewData declared in reviewData.js
    reviewData[activeMovieId][currentUserUsername].rating =
      inputRatingDOM.value;
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
  }
}

function deleteReview() {
  const activeMovieId = localStorage.getItem("activeMovie");
  const currentUserUsername = JSON.parse(
    localStorage.getItem("currentUser"),
  ).username;
  delete reviewData[activeMovieId][currentUserUsername];
  localStorage.setItem("reviewData", JSON.stringify(reviewData));
}

// function printReview() {
//   const activeMovieId = localStorage.getItem("activeMovie");
//   const currentUserUsername = JSON.parse(
//     localStorage.getItem("currentUser"),
//   ).username;
//   const reviewDOM = document.getElementById("reviewContainer");
//   let reviewElement = "";
//   if (reviewData[activeMovieId][currentUserUsername]) {
//     let currentUserReview = `insert element review`;
//     reviewElement = currentUserReview;
//   }
//   for (const username in reviewData[activeMovieId]) {
//     if (username === currentUserUsername) continue;
//     reviewElement += `insert element review `;
//   }

//   reviewDOM.innerHTML = reviewElement;
// }

// Menampilkan data film

function renderActiveMovie() {
  const movieDetailsContainer = document.getElementById(
    "moviedetails-container",
  );
  const currentActiveMovie = localStorage.getItem("activeMovie");
  const moviesData = JSON.parse(localStorage.getItem("movieData"));
  const reviewData = JSON.parse(localStorage.getItem("reviewData"));

  const currentActiveUsername = localStorage.getItem("currentUser") ? JSON.parse(
    localStorage.getItem("currentUser"),
  ).username : undefined;
  let reviewsElement = ``;

  for (const user in reviewData[currentActiveMovie]) {
    const userReview = reviewData[currentActiveMovie][user];

    let stars = [];
    for (let i = 0; i < userReview.rating; i++) stars.push ("★");
    for (let i = 0; i < 5 - userReview.rating; i++) stars.push ("☆");
    stars = stars.join("");

    let reviewCardTemplate = `
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="card mb-4 border-1">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between mb-3">
                  <div>
                    <h5 class="card-title mb-1 fw-bold">${user}</h5>
                  </div>
                  <div class="text-warning">
                    ${stars}
                  </div>
                </div>
                <p class="card-text">
                  ${userReview.review}
                </p>
              </div>
            </div>
          </div>
        </div>
    `
    if (currentActiveUsername === user) {
      reviewsElement = reviewCardTemplate + reviewsElement;
    } else {
      reviewsElement += reviewCardTemplate;
    }
  }

  let addReviewButton = currentActiveUsername && !reviewData[currentActiveMovie][currentActiveUsername] ? `<button class="btn btn-outline-primary">Tambah Ulasan</button>` : ``;

  for (let i = 0; i < moviesData.length; i++) {
    if (moviesData[i].id === Number(currentActiveMovie)) {
      movieDetailsContainer.innerHTML = `
				<!-- movie details top part start -->
				<div style="margin-top: 75px" class="container">
					<h1 class="display-6">Movie Details</h1>
					<div style="margin-top: 50px" class="row">
						<div class="col-4">
              <img
								style="width: 400px"
								src="../assets/images/${moviesData[i].imgName}"
								class="rounded mx-auto d-block"
								alt="${moviesData[i].imgName}"
              />
              <div style="margin-top: 30px; margin-left: 7px">
								<p class="h5">Release Date :</p>
								<p style="font-weight: 300; font-size: 2rem" class="display-6">
									${moviesData[i].releaseDate}
								</p>
								<p class="h5">Director:</p>
								<p style="font-weight: 300; font-size: 2rem" class="display-6">
									${moviesData[i].director}
								</p>
              </div>
						</div>
						<div class="col-8">
              <h1 class="display-2">${moviesData[i].title}</h1>
              <p style="font-weight: 300; font-size: 1.5rem" class="display-6">
                ${moviesData[i].genre.join(", ")}
              </p>
              <p style="font-weight: 400; margin-top: 50px" class="h4">
                  Rating: <span style="font-weight: 300">${moviesData[i].rating}</span> / 5
              </p>
              <p class="lead" style="margin-top: 10px">
                ${moviesData[i].synopsis}
              </p>
              ${moviesData[i].trailerEmbeddedHTML}
              
              <div class="container py-5" id="allReviews">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="mb-0">Ulasan <span class="text-primary">${moviesData[i].title}</span></h3>
                  ${addReviewButton}
                </div>
                ${reviewsElement}
              </div>

            </div>
          </div>
        </div>
			<!-- movie details top part end -->
    `;
    break;
    }
  }
}
renderActiveMovie();
