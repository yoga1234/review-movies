// rendering first index movie
let indexContainer = document.getElementById("index-container");

let data1 = JSON.parse(localStorage.getItem("movieData"))[0];
let data2 = JSON.parse(localStorage.getItem("movieData"))[1];
//ambil title, releaseDate, director,genre, sinopsis

indexContainer.innerHTML = `
  <div class="row" style="margin-top: 100px">
    <div class="col-sm-4">
      <img
        style="width: 300px"
        src="./assets/images/${data1.imgName}"
        class="rounded mx-auto d-block"
        alt="${data1.title}"
      />
    </div>
    <div class="col-sm-8">
      <h1 class="display-1">${data1.title}</h1>
      <h4><small class="text-body-secondary">${data1.director}</small></h4>
      <p class="lead">
        ${data1.synopsis}
      </p>
      <p><em>${data1.releaseDate}</em></p>
      <blockquote class="blockquote">
        <p><i>${data1.genre}</i></p>
      </blockquote>
    </div>
  </div>
`;
indexContainer.innerHTML += `<hr style="margin-top: 100px" />`;

indexContainer.innerHTML += `
  <div class="row" style="margin-top: 100px">
    <div class="col-sm-8">
      <h1 class="display-1">${data2.title}</h1>
      <h4><small class="text-body-secondary">${data2.director}</small></h4>
      <p class="lead">
        ${data2.synopsis}
      </p>
      <p><em>${data2.releaseDate}</em></p>
      <blockquote class="blockquote">
        <p><i>${data2.genre}</i></p>
      </blockquote>
    </div>
    <div class="col-sm-4">
      <img
        style="width: 300px"
        src="./assets/images/${data2.imgName}"
        class="rounded mx-auto d-block"
        alt="${data2.title}"
      />
    </div>
  </div>
`;
