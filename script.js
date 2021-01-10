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
.then(function(res){
  var test = res.sprites.front_default
  document.getElementById("img").src = test;
})
.catch(function(error
){
  console.log(error);
})

let url3 = "https://pokeapi.co/api/v2/pokemon/" + search.value
fetch(url3)
.then(response => response.json())
.then(function(res){
  document.getElementById("weight").innerHTML = res.weight / 10 + " kg";
  document.getElementById("height").innerHTML = res.height / 10 + " m";
})
.catch(function(error
){
 console.log(error);
})


});

