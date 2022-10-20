// API information.
let apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
let SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let main = document.getElementById("main");
let form = document.getElementById("form");
let search = document.getElementById("search");

showTv(apiUrl);
function showTv(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data);
      data.results.forEach((data) => {
        let el = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("h2");

        text.innerHTML = `${data.title}
        <button onclick="movieDetails(${data.id})" class= "btn" href="#">Movie Detail</button>`;
        // console.log(text)
        image.src = IMGPATH + data.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}

function movieDetails(id) {
  localStorage.setItem("movieid", id);
  console.log(id);
  window.location = "movie detail.html";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  console.log(main);
  let searchTerm = search.value;

  if (searchTerm) {
    showTv(SEARCHAPI + searchTerm);
    console.log(showTv);
    search.value = "";
    console.log(search.value);
  }
});
