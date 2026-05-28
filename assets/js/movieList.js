let moviesData = JSON.parse(localStorage.getItem("movieData"));
let movieListCardContainer = document.getElementById(
  "movielist-card-container",
);
const cariJudulForm = document.getElementById("moviecarijudul");
const searchResetButton = document.getElementById("search-reset-button");

function cutSynopsis(synopsisString) {
  let result = "";
  for (let i = 0; i < 75; i++) {
    result += synopsisString[i];
    if (i === 74) {
      result += "...";
    }
  }

  return result;
}

function setActiveMovie(id) {
  localStorage.setItem("activeMovie", String(id));
}

function renderMovieList(data) {
  movieListCardContainer.innerHTML = "";

  if (data.length === 0) {
    movieListCardContainer.innerHTML = `
    <p style="margin-top: 250px; margin-bottom: 250px" class="text-center display-6">Film tidak ditemukan.</p>
    `;
  } else {
    for (let i = 0; i < data.length; i++) {
      movieListCardContainer.innerHTML += `
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="../assets/images/${data[i].imgName}"
              class="card-img-top"
              alt="${data[i].title}"
            />
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">
              ${cutSynopsis(data[i].synopsis)}
              </p>
              <a onclick="setActiveMovie(${data[i].id})"  href="./moviedetails.html" class="btn btn-primary">Lihat Detail</a>
          </div>
        </div>
      `;
    }
  }
}

renderMovieList(moviesData);

cariJudulForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let filmTemp = [];

  const judulInput = document.getElementById("carijudul").value.toLowerCase();
  if (judulInput === "" || judulInput.trim().length === 0) {
    Swal.fire({
      text: "Apakah Anda lupa memasukan judul film?",
      icon: "question",
    });
    cariJudulForm.reset();
    return;
  }

  movieListCardContainer.innerHTML = `<p class="loading-text">Loading...</p>`;

  for (let i = 0; i < moviesData.length; i++) {
    if (moviesData[i].title.toLowerCase().search(judulInput) !== -1) {
      filmTemp.push(moviesData[i]);
    }
  }
  setTimeout(function () {
    renderMovieList(filmTemp);
  }, 1000);
});

searchResetButton.addEventListener("click", function () {
  const judulInput = document.getElementById("carijudul").value;

  if (judulInput.length === 0) {
    return;
  }

  movieListCardContainer.innerHTML = `<p class="loading-text">Loading...</p>`;
  setTimeout(function () {
    cariJudulForm.reset();
    renderMovieList(moviesData);
  }, 1000);
});
