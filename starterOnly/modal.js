function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
 modalbg.style.display = "block";
};


// delete nav "Accueil"
let nav = document.querySelector(".main-navbar");
const navAccueil = document.querySelector(".main-navbar > .active");
nav.removeChild(navAccueil);




//add div validation message
const newDiv = document.createElement("div");
newDiv.className = "validation";
modalbg.appendChild(newDiv);
newDiv.innerHTML = "<p>Merci pour</p><p>Votre Inscription</p>";


const arrowClose = document.createElement("span");
arrowClose.classList.add("close");
newDiv.appendChild(arrowClose);

const btnClose = document.createElement("button");
btnClose.className = "btn-close";
btnClose.innerHTML = "Fermer";
newDiv.appendChild(btnClose);

// add event button submit "c'est partir"
const inscription = document.querySelector(".bground > .content");




//validate form ,The data must be entered correctly

document.getElementById("myform")
.addEventListener("submit",validate);

  function validate(e) {
  var prenom = document.getElementById("first");
  var nom = document.getElementById("last");
  var email = document.getElementById("email");
  var birth = document.getElementById("birthdate");

  if (prenom.value.length < 2) {
    prenom.setCustomValidity("Le champ Prénom a un minimum de 2 caractères");
    e.preventDefault();
    return false;
  
  }else if (prenom.value.trim() = "" ) {
    prenom.setCustomValidity("n\'est pas vide");
    e.preventDefault();
    return false;

  }else if (nom.value.length < 2) {
    nom.setCustomValidity("Le champ Prénom a un minimum de 2 caractères");
    e.preventDefault();
    return false;

  } else if (nom.value.trim() = "") {
    nom.setCustomValidity("n\'est pas vide");
    e.preventDefault();
    return false;
  } else if (email.value.trim()= ""){
    email.setCustomValidity("L\'adresse électronique est valide.");
    e.preventDefault();

  } else if (/^[0-9]{8}$/.test(birth.value) = false){
    birth.setCustomValidity("Pour le nombre de concours, une valeur numérique est saisie.")
    e.preventDefault();
  }
  
 
   else{return true;}
  };
  


 // function show validation message
 //if(validate() === true){
 //function showMessage() {
 //inscription.style.display = "none";
 //newDiv.style.display = "flex"; 
 //}};



//add "close" function


document.querySelector(".content > .close")
.addEventListener("click",closeWindow);
arrowClose.addEventListener("click",closeWindow);

function closeWindow() {
modalbg.style.display = "none"
};

// add event close validation message

btnClose.addEventListener("click",closeWindow);