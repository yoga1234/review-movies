const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.innerHTML = `
  <!-- header start -->
  <div class="navbar">
    <div class="left-side">MOVIE REVIEW</div>
    <div class="right-side">
      <a href="../index.html">HOME</a>
      <a href="./pages/movielist.html">MOVIE LIST</a>
      <a href="./pages/daftarlogin.html">LOGIN</a>
    </div>
  </div>
`;

footer.innerHTML = `
  <div class="top">
    <div class="left-side">© Movie Review Limited. 2026 Copyrighted</div>
    <div class="right-side">MOVIE REVIEW</div>
  </div>
  <div class="bottom">-Created with PRIDE by YOGASMARA and ZUFAR-</div>
`;
