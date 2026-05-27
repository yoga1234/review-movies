// localStorage.clear();
let movieData;
movieData = [
  {
    id: 101,
    title: "Monster",
    releaseDate: 2023,
    imgName: "monster.jpg",
    director: "Hirokazu Kore-eda",
    genre: ["Thriller", "Mystery", "Drama"],
    synopsis:
      "After an outburst at school involving her son, a concerned single mother demands answers, triggering a sequence of deepening suspicion and turmoil.",
    trailerYTLink:
      "https://www.youtube.com/embed/cOpWDxxiwoE?si=wyStRLx6_6uJXl49",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cOpWDxxiwoE?si=wyStRLx6_6uJXl49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`, // digenerate langsung dari youtube. ga perlu dipake klo mau bikin sendiri
  },
  {
    id: 102,
    title: "Jojo Rabbit",
    releaseDate: 2019,
    imgName: "jojo-rabit.jpg",
    director: "Taika Waititi",
    genre: ["War", "Comedy", "Drama"],
    synopsis:
      "Jojo, a lonely German boy during World War II has his world shaken when he learns that his single mother is hiding a Jewish girl in their home. Influenced by a buffoonish imaginary version of Adolf Hitler, he begins to question his beliefs and confront the conflict between propaganda and his own humanity.",
    trailerYTLink:
      "https://www.youtube.com/embed/tL4McUzXfFI?si=dZ6E6rS2K3Que3gn",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tL4McUzXfFI?si=dZ6E6rS2K3Que3gn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 103,
    title: "Hidden Figures",
    releaseDate: 2016,
    imgName: "hidden-figures.jpg",
    director: "Theodore Melfi",
    genre: ["Drama", "History"],
    synopsis:
      "The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson - brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history - the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
    trailerYTLink:
      "https://www.youtube.com/embed/5wfrDhgUMGI?si=kT7O3qPlew62mgav",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5wfrDhgUMGI?si=kT7O3qPlew62mgav" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 104,
    title: "The Imitation Game",
    releaseDate: 2014,
    imgName: "the-imitation-game.jpg",
    director: "Morten Tyldum",
    genre: ["Drama", "War", "Thriller", "History"],
    synopsis:
      "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
    trailerYTLink:
      "https://www.youtube.com/embed/j2jRs4EAvWM?si=_eJvFBDNc2aJXYEN",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/j2jRs4EAvWM?si=_eJvFBDNc2aJXYEN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 105,
    title: "The Help",
    releaseDate: 2011,
    imgName: "the-help.jpg",
    director: "Tate Taylor",
    genre: ["Drama"],
    synopsis:
      "Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia “Skeeter” Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around “the help”; yet they are always kept at a certain distance because of racial lines.",
    trailerYTLink:
      "https://www.youtube.com/embed/3eajzW3XW7Q?si=F_y72coPJcZxWFyQ",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3eajzW3XW7Q?si=F_y72coPJcZxWFyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 106,
    title: "Ada Apa dengan Cinta?",
    releaseDate: 2002,
    imgName: "ada-apa-dengan-cinta.jpg",
    director: "Rudi Soedjarwo",
    genre: ["Romance", "Drama"],
    synopsis:
      "A popular high school girl strains her relationship with her close-knit clique when she begins falling for a reclusive, lower-class schoolmate.",
    trailerYTLink:
      "https://www.youtube.com/embed/mSZ-ySRW29k?si=kD5745sqx5pOqFQS",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mSZ-ySRW29k?si=kD5745sqx5pOqFQS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 107,
    title: "The Truman Show",
    releaseDate: 1998,
    imgName: "the-truman-show.jpg",
    director: "Peter Weir",
    genre: ["Comedy", "Drama"],
    synopsis:
      "In a picture-perfect seaside town, an insurance salesman begins to realize that his entire existence may be staged and observed by a vast unseen audience as part of a reality TV show.",
    trailerYTLink:
      "https://www.youtube.com/embed/N1VlDVRiFrk?si=H0r26ZbQnTxoyzLt",
    trailerEmbeddedHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/N1VlDVRiFrk?si=H0r26ZbQnTxoyzLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
];

function updateData() {
  let storageData = localStorage.getItem("movieData");

  if (JSON.stringify(movieData) !== storageData) {
    localStorage.setItem("movieData", JSON.stringify(movieData));
  }
}
updateData();
