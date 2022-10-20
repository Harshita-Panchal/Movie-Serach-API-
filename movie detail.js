let div = document.getElementById("details");
let IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function showMovieInfo() {
  let id = localStorage.getItem("movieid");
  console.log(id);
  let url = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`);
  let res = await url.json();
  console.log(res);
  div.innerHTML = `
    <div class="data">
    <div>
    <img src="${IMGPATH + res.poster_path}">
  </div>
  <div class="info">
    <h1>${res.title}</h1>
      <p><b>Rating:</b> ${res.vote_average}</p>
      <p><b>Released:</b> ${res.release_date}</p>
    <p><b>Popularity:</b> ${res.popularity}</p>
    <p><b>Overview:</b> ${res.overview}</p>
  </div>
    </div>`;
}
showMovieInfo();
