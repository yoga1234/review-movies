function checkRatingInput() {
    ratingInputDOM = document.getElementById("reviewRating");
    if (!ratingInputDOM.value) {
        ratingInputDOM.classList.add("is-invalid");
    } else {
        ratingInputDOM.classList.remove("is-invalid");
    }
}
function checkReviewText() {
  const reviewTextDOM = document.getElementById("reviewText");
    if (!reviewTextDOM.value) {
        reviewTextDOM.classList.add("is-invalid");
    } else {
        reviewTextDOM.classList.remove("is-invalid");
    }
}

function createUpdateReview() {
  checkRatingInput();
  checkReviewText();

  const ratingInputDOM = document.getElementById("reviewRating");
  const reviewTextDOM = document.getElementById("reviewText");
  const reviewData = JSON.parse(localStorage.getItem("reviewData"));
  const currentActiveMovie = localStorage.getItem("activeMovie");
  const currentActiveUsername = JSON.parse(localStorage.getItem("currentUser")).username;

  if (ratingInputDOM.value  && reviewTextDOM.value) {
    Swal.fire({
      title: "Simpan ulasan?",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: `Batalkan`,
      icon: "question"
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(currentActiveMovie, currentActiveUsername);
        reviewData[currentActiveMovie][currentActiveUsername] = {};
        reviewData[currentActiveMovie][currentActiveUsername].review = reviewTextDOM.value;
        reviewData[currentActiveMovie][currentActiveUsername].rating = Number(ratingInputDOM.value);
        // console.log(reviewData);
        localStorage.setItem("reviewData", JSON.stringify(reviewData));
        Swal.fire({
          title: "Sukses",
          text: "Ulasan anda berhasil disimpan.",
          icon: "success"
        }).then(() => {location.reload()});
      }
    });
  }
}

function deleteReview() {
  const activeMovieId = localStorage.getItem("activeMovie");
  const currentUserUsername = JSON.parse(localStorage.getItem("currentUser")).username;
  Swal.fire({
    title: "Hapus ulasan?",
    text: "Ulasan yang telah dihapus tidak dapat dikembalikan.",
    showCancelButton: true,
    confirmButtonText: "Hapus",
    confirmButtonColor: "#d33",
    cancelButtonText: `Batalkan`,
    icon: "warning"
  }).then((result) => {
    if (result.isConfirmed) {
      delete reviewData[activeMovieId][currentUserUsername];
      localStorage.setItem("reviewData", JSON.stringify(reviewData));
      Swal.fire({
        title: "Sukses",
        text: "Ulasan anda berhasil dihapus.",
        icon: "success"
      }).then(() => {location.reload()});
    }
  });
}

function toggleReviewForm() {
  const currentActiveUsername = JSON.parse(localStorage.getItem("currentUser")).username;
  const currentActiveMovie = localStorage.getItem("activeMovie");
  const reviewFormDOM = document.getElementById("inputReviewContainer");
  const reviewFormButtonDOM = document.getElementById("toggleReviewFormButton");
  const ratingInputDOM = document.getElementById("reviewRating");
  const reviewTextDOM = document.getElementById("reviewText");
  const reviewCardDOM = document.getElementById(`card-${currentActiveUsername}`)

  if (reviewCardDOM) { // Kalau dipanggil untuk update dan bukan create, masukin value yg udh ada
    const reviewData = JSON.parse(localStorage.getItem("reviewData"));

    reviewCardDOM.classList.toggle("d-none");
    ratingInputDOM.value = reviewData[currentActiveMovie][currentActiveUsername].rating;
    reviewTextDOM.value = reviewData[currentActiveMovie][currentActiveUsername].review;
  } else {
    reviewFormButtonDOM.classList.toggle("d-none");
    ratingInputDOM.value = "";
    reviewTextDOM.value = "";
  }

  reviewFormDOM.classList.toggle("d-none");
  ratingInputDOM.classList.remove("is-invalid");
  reviewTextDOM.classList.remove("is-invalid");
}

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
        <div class="row d-flex justify-content-center" id="card-${user}">
          <div class="col-10">
            <div class="card mb-4 border-1">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between mb-3">
                  <div>
                    <h5 class="card-title fw-bold">${user}</h5>
                  </div>
                  <div class="text-warning" id="rating-${user}" data-value="${userReview.rating}">
                    ${stars}
                  </div>
                </div>
                <p class="card-text" id="review-${user}">
                  ${userReview.review}
                </p>
                ${currentActiveUsername === user ? `
                  <div class="d-flex justify-content-end gap-2">
                    <button type="button" title="Sunting Ulasan" class="btn btn-primary" onclick="toggleReviewForm()"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" title="Hapus Ulasan" class="btn btn-danger" onclick="deleteReview()"><i class="bi bi-trash"></i></button>
                  </div>
                  ` : ``}
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

  let addReviewButton = currentActiveUsername && !reviewData[currentActiveMovie][currentActiveUsername] ? `<button class="btn btn-outline-primary" id="toggleReviewFormButton" onclick="toggleReviewForm()">Tambah Ulasan</button>` : ``;

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

                <div class="mb-4 d-none" id="inputReviewContainer">
                  <div class="row justify-content-center">
                    <div class="col-10">
                      <div class="card border">
                        <div class="card-body p-4">
                          <form>
                            <div class="mb-4">
                              <label for="reviewRating" class="form-label fw-bold">Rating</label>
                              <select class="form-select" id="reviewRating" onblur="checkRatingInput()" required>
                                <option value="" selected disabled></option>
                                <option value="5">★★★★★ - Mahakarya</option>
                                <option value="4">★★★★☆ - Bagus</option>
                                <option value="3">★★★☆☆ - Biasa saja</option>
                                <option value="2">★★☆☆☆ - Buruk</option>
                                <option value="1">★☆☆☆☆ - Sangat buruk</option>
                              </select>
                            </div>

                            <div class="mb-4">
                              <label for="reviewText" class="form-label fw-bold">Ulasan Anda</label>
                              <textarea class="form-control" id="reviewText" rows="5" onblur="checkReviewText()" required></textarea>
                            </div>

                            <div class="d-flex justify-content-end gap-2">
                              <button type="button" class="btn btn-primary" onclick="createUpdateReview()">Tambahkan Ulasan</button>
                              <button type="button" class="btn btn-outline-secondary" onclick="toggleReviewForm()">Batalkan</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
