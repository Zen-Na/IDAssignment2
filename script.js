let url = "https://pokeapi.co/api/v2/pokemon/ditto"

btn.addEventListener("click", function() {
fetch(url)
  .then(response => response.json()) 
  .then(data)
});

function data (e) {

  console.log(e)
}

submit.addEventListener("click", function() {
let search = document.getElementById("srch");
let url2 = "https://pokeapi.co/api/v2/pokemon-form/" + search.value
console.log(url2)
fetch(url2)
  .then(response => response.json()) 
  .then(data1)
});

function data1 (e) {
  console.log("test")
  console.log(e.sprites.front_default)
  console.log(typeof e.sprites.front_default);
  var test = e.sprites.front_default
  document.getElementById("img").src = test;
}

