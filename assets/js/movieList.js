let moviesData = JSON.parse(localStorage.getItem("movieData"));
let movieListCardContainer = document.getElementById(
  "movielist-card-container",
);

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
            <a onclick="setActiveMovie(${data[i].id})"  href="./movieDetails.html" class="btn btn-primary">Lihat Detail</a>
        </div>
      </div>
    `;
  }
}

renderMovieList(moviesData);
