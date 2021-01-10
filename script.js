let url = "https://pokeapi.co/api/v2/pokemon/ditto"
document.getElementById("imgfemaleshiny").style.display = "none"
document.getElementById("imgfemale").style.display = "none"
document.getElementById("imgshiny").style.display = "none"
document.getElementById("img").style.display = "none"

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

// Image of Pokemon
let url2 = "https://pokeapi.co/api/v2/pokemon/" + search.value;
fetch(url2)
.then(response => response.json())
.then(function(res){
  
  // show image
  document.getElementById("img").style.display = "inline"
  document.getElementById("img").src = res.sprites.front_default;
  document.getElementById("imgshiny").src = res.sprites.front_shiny;

  // Check if female sprites available
  if(res.sprites.front_female == null){
    document.getElementById("imgfemale").src = "https://www.flaticon.com/svg/static/icons/svg/390/390914.svg"
  }
  else {
    document.getElementById("imgfemale").src = res.sprites.front_female;
  } 

  if(res.sprites.front_female == null){
    document.getElementById("imgfemaleshiny").src = "https://www.flaticon.com/svg/static/icons/svg/390/390914.svg"
  }
  else {
    document.getElementById("imgfemaleshiny").src = res.sprites.front_shiny_female;
  } 

})
.catch(function(error
){
  console.log(error);
})

// Weight & Height of Pokemon
let url3 = "https://pokeapi.co/api/v2/pokemon/" + search.value
fetch(url3)
.then(response => response.json())
.then(function(res){

  // Set weight & height
  document.getElementById("weight").innerHTML = res.weight / 10 + " kg";
  document.getElementById("height").innerHTML = res.height / 10 + " m";

  // Set first type
  document.getElementById("type1").innerHTML = res.types[0].type.name;
  
  // Check if second type null, else set second type (some pokemon only has one type)
  if(res.types[1] == null){
    document.getElementById("type2").innerHTML = "";
  }
  else {
    document.getElementById("type2").innerHTML = res.types[1].type.name;
  } 
})
.catch(function(error
){
 console.log(error);
})

// Description of Pokemon
let url4 = "https://pokeapi.co/api/v2/pokemon-species/" + search.value
fetch(url4)
.then(response => response.json())
.then(function(res){

  // For loop to run through and retrieve the first english description (sometimes the first description may not neccesarily be in english)
  for (i=0; i < res.flavor_text_entries.length; i++){
    if (res.flavor_text_entries[i].language.name == "en"){
      var string = res.flavor_text_entries[i].flavor_text
      string = string.replace("\u000c", " ") // Removing the unicode icon that is included in the api string value
      document.getElementById("desc").innerHTML = string;
      break;
    }
  }
})
.catch(function(error
){
 console.log(error);
})


});

malebtn.addEventListener("click", function() {
  document.getElementById("imgfemale").style.display = "none"
  document.getElementById("imgfemaleshiny").style.display = "none"
  document.getElementById("img").style.display = "inline"
  document.getElementById("imgshiny").style.display = "inline"
});

femalebtn.addEventListener("click", function() {
  document.getElementById("imgfemale").style.display = "inline"
  document.getElementById("imgfemaleshiny").style.display = "inline"
  document.getElementById("img").style.display = "none"
  document.getElementById("imgshiny").style.display = "none"
});

// Switch between default and shiny image
defaultbutton.addEventListener("click", function() {
  console.log("default btn")
  if (document.getElementById("imgfemaleshiny").style.display == "inline"){
    document.getElementById("imgfemale").style.display = "inline"
    document.getElementById("imgfemaleshiny").style.display = "none"
  }
  if (document.getElementById("imgshiny").style.display = "inline"){
    document.getElementById("img").style.display = "inline"
    document.getElementById("imgshiny").style.display = "none"
  }
});

shinybutton.addEventListener("click", function() {
  console.log("shiny btn")
  if (document.getElementById("imgfemale").style.display == "inline"){
    document.getElementById("imgfemaleshiny").style.display = "inline"
    document.getElementById("imgfemale").style.display = "none"
  }
  if (document.getElementById("img").style.display = "inline"){
    console.log("shiny change")
    document.getElementById("imgshiny").style.display = "inline"
    document.getElementById("img").style.display = "none"
    
  }
});