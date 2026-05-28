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
  reviewData[activeMovieId][currentUserUsername] = undefined;
  localStorage.setItem("reviewData", JSON.stringify(reviewData));
}

function printReview() {
  const activeMovieId = localStorage.getItem("activeMovie");
  const currentUserUsername = JSON.parse(
    localStorage.getItem("currentUser"),
  ).username;
  const reviewDOM = document.getElementById("reviewContainer");
  let reviewElement = "";
  if (reviewData[activeMovieId][currentUserUsername]) {
    let currentUserReview = `insert element review`;
    reviewElement = currentUserReview;
  }
  for (const username in reviewData[activeMovieId]) {
    if (username === currentUserUsername) continue;
    reviewElement += `insert element review `;
  }

  reviewDOM.innerHTML = reviewElement;
}

// activeMovieId = localStorage.getItem("activeMovie");
// currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
// console.log(activeMovieId, currentUserUsername);
// console.log(reviewData);
// console.log(localStorage.getItem("activeMovie"), typeof(localStorage.getItem("activeMovie")));

// Menampilkan data film

function renderActiveMovie() {
  const movieDetailsContainer = document.getElementById(
    "moviedetails-container",
  );
  const currentActiveMovie = localStorage.getItem("activeMovie");
  const moviesData = JSON.parse(localStorage.getItem("movieData"));

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
							${moviesData[i].genre}
						</p>
						<p style="font-weight: 400; margin-top: 50px" class="h4">
								Rating: <span style="font-weight: 300">4.3</span> / 5
						</p>
						<p class="lead" style="margin-top: 10px">
							${moviesData[i].synopsis}
						</p>
						${moviesData[i].trailerEmbeddedHTML}
					</div>
				</div>
			</div>
			<!-- movie details top part end -->
	`;
    }
  }
}
renderActiveMovie();
