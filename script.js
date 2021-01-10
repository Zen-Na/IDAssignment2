document.getElementById("imgfemaleshiny").style.display = "none";
document.getElementById("imgfemale").style.display = "none";
document.getElementById("imgshiny").style.display = "none";
document.getElementById("img").style.display = "none";


submit.addEventListener("click", function() {
clearImage()
let search = document.getElementById("srch");

// Image of Pokemon
let url2 = "https://pokeapi.co/api/v2/pokemon/" + search.value;
fetch(url2)
.then(response => response.json())
.then(function(res){
  
  // show image
  document.getElementById("img").style.display = "inline";
  document.getElementById("img").src = res.sprites.front_default;
  document.getElementById("imgshiny").src = res.sprites.front_shiny;

  // Check if female sprites available
  if(res.sprites.front_female == null){
    document.getElementById("imgfemale").src = "https://www.flaticon.com/svg/static/icons/svg/390/390914.svg";
  }
  else {
    document.getElementById("imgfemale").src = res.sprites.front_female;
  }

  if(res.sprites.front_female == null){
    document.getElementById("imgfemaleshiny").src = "https://www.flaticon.com/svg/static/icons/svg/390/390914.svg";
  }
  else {
    document.getElementById("imgfemaleshiny").src = res.sprites.front_shiny_female;
  } 
})
.catch(function(error
){
  console.log(error);
})

// Set details of Pokemon
let url3 = "https://pokeapi.co/api/v2/pokemon/" + search.value
fetch(url3)
.then(response => response.json())
.then(function(res){

  // Set weight & height
  document.getElementById("weight").innerHTML = "Weight: " + res.weight / 10 + " kg";
  document.getElementById("height").innerHTML = "Height: " + res.height / 10 + " m";

  // Set first type
  var type1 = res.types[0].type.name
  // Capitalize first letter
  type1 = type1.charAt(0).toUpperCase() + type1.slice(1);
  document.getElementById("type1").innerHTML = type1;
  
  // Check if second type null, else set second type (some pokemon only has one type)
  if(res.types[1] == null){
    document.getElementById("type2").innerHTML = "";
  }
  else {
    var type2 = res.types[1].type.name
    // Capitalize first letter
    type2 = type2.charAt(0).toUpperCase() + type2.slice(1);
    document.getElementById("type2").innerHTML = type2;
  }

  // Set name
  var pokename = res.name;
  // Capitalize first letter
  pokename = pokename.charAt(0).toUpperCase() + pokename.slice(1);
  document.getElementById("name").innerHTML = pokename;
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
      var string = res.flavor_text_entries[i].flavor_text;
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

// Switch between default and shiny image
defaultbutton.addEventListener("click", function() {
  console.log("default btn");

  // if female shiny displayed, change to female default
  if (document.getElementById("imgfemaleshiny").style.display == "inline"){
    document.getElementById("imgfemale").style.display = "inline";
    document.getElementById("imgfemaleshiny").style.display = "none";
  }

  // if male shiny displayed, change to male default
  if (document.getElementById("imgshiny").style.display == "inline"){
    document.getElementById("img").style.display = "inline";
    document.getElementById("imgshiny").style.display = "none";
  }
});

shinybutton.addEventListener("click", function() {
  console.log("shiny btn");

  // if female displayed, change to female shiny
  if (document.getElementById("imgfemale").style.display == "inline"){
    document.getElementById("imgfemaleshiny").style.display = "inline";
    document.getElementById("imgfemale").style.display = "none";
  }

  // if male displayed, change to male shiny
  if (document.getElementById("img").style.display == "inline"){
    console.log("shiny change");
    document.getElementById("imgshiny").style.display = "inline";
    document.getElementById("img").style.display = "none";
    
  }
});

malebtn.addEventListener("click", function() {
  console.log("default btn");

  // if female displayed, change to male
  if (document.getElementById("imgfemale").style.display == "inline"){
    console.log("1");
    document.getElementById("imgfemale").style.display = "none";
    document.getElementById("img").style.display = "inline";
  }

  // if female shiny displayed, change to male shiny
  if (document.getElementById("imgfemaleshiny").style.display == "inline"){
    console.log("2");
    document.getElementById("imgfemaleshiny").style.display = "none";
    document.getElementById("imgshiny").style.display = "inline";
  }
});

femalebtn.addEventListener("click", function() {
  console.log("default btn")

  // if male displayed, change to female
  if (document.getElementById("img").style.display == "inline"){
    document.getElementById("img").style.display = "none";
    document.getElementById("imgfemale").style.display = "inline";
  }

  // if male shiny displayed, change to female shiny
  if (document.getElementById("imgshiny").style.display == "inline"){
    document.getElementById("imgshiny").style.display = "none";
    document.getElementById("imgfemaleshiny").style.display = "inline";
  }
});

function clearImage(){
  document.getElementById("imgfemaleshiny").style.display = "none";
  document.getElementById("imgfemale").style.display = "none";
  document.getElementById("imgshiny").style.display = "none";
  document.getElementById("img").style.display = "none";
};