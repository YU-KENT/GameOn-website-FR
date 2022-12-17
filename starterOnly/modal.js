function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.classList.add ("responsive"); //correct add classname
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const inscription = document.querySelector(".bground > .content");
const birth = document.getElementById("birthdate");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
 modalbg.style.display = "block";
 newDiv.style.display = "none";
};


// delete nav "Accueil"
let nav = document.querySelector(".main-navbar");
const navAccueil = document.querySelector(".main-navbar > .active");
nav.removeChild(navAccueil);




//add div validation message
const newDiv = document.createElement("div");
newDiv.className = "validation";
newDiv.innerHTML = "<p>Merci pour</p><p>Votre Inscription</p>";

modalbg.appendChild(newDiv);

const arrowClose = document.createElement("span");
arrowClose.classList.add("close");
newDiv.appendChild(arrowClose);

const btnClose = document.createElement("button");
btnClose.className = "btn-close";
btnClose.innerHTML = "Fermer";
newDiv.appendChild(btnClose);



//validate form ,The data must be entered correctly

document.getElementById("myform")
.addEventListener("submit",validate);

  function validate(event) {
    event.preventDefault();
    event.stopPropagation();
    const conditions = 
    [validatePrenom(),validateNom(),validateEmail(),validateBirth(),
    validateQuantity(),validateRadio(),validateCondition()]
  if (conditions.filter((func) => !func))
      {
        return;
      }
      showMessage();
      console.log("KKK");

};
//validate prenom

function validatePrenom(){
if (prenom.value.trim() === "" || prenom.value.length < 2) /* not empty or at least 2 characters */
{
formData[0].setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du prenom");
formData[0].setAttribute("data-error-visible", true);
return false;
}
else{
formData[0].removeAttribute('data-error');
formData[0].removeAttribute('data-error-visible');
return true;
}

};

// validate nom
function validateNom(){
if (nom.value.trim() === "" || nom.value.length < 2) /* not empty or at least 2 characters */
    {
    formData[1].setAttribute('data-error','Veuillez entrer 2 caractères ou plus pour le champ du nom');
    formData[1].setAttribute('data-error-visible',true);
    return false;
    
    }
else{
      formData[1].removeAttribute('data-error');
      formData[1].removeAttribute('data-error-visible');
      return true;
      }
  };


// validate email
function validateEmail(){
const regexEmail =
/^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/; /*regex mail*/

if (!regexEmail.test(email.value) || email.value.trim() === "" )/* not empty or match regex condition */
{
formData[2].setAttribute('data-error','Veuillez inclure \"@\" dans l\'adress e-mail');
formData[2].setAttribute('data-error-visible',true);
console.log("email wrong");
return false;
}

else{
  formData[2].removeAttribute('data-error');
  formData[2].removeAttribute('data-error-visible');
  return true;
  }
}
// validate birthday

function validateBirth(){

if (birth.value == "") 
{
  formData[3].setAttribute('data-error','Vous devez entrer votre date de naissance');
  formData[3].setAttribute('data-error-visible',true);
  return false;
}
 else {
  formData[3].removeAttribute('data-error');
  formData[3].removeAttribute('data-error-visible');
  return true;
 }
}


//function birthday can't be current day
function requireBirth () {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
     
if ( month < 10) // if number of month below 10, add "0" before
    {newMonth = "0" + (month + 1)} 
else { newMonth = month + 1};
  
if (today.getDate() < 10) {  //if number of day below 10, add "0" before
  newDay = "0"+ today.getDate()
}
else {
  newDay = today.getDate()
};

birth.setAttribute("max",year+"-"+newMonth+"-"+newDay);
} ;

requireBirth (); //run function

// function vilidate quantity
const quantitySelect = document.querySelector("input[name='quantity']");

function validateQuantity(){
if(quantitySelect.value == "")
{
  formData[4].setAttribute('data-error','Veuillez choisir un chiffre');
  formData[4].setAttribute('data-error-visible',true);
  return false;
}
 else {
  formData[4].removeAttribute('data-error');
  formData[4].removeAttribute('data-error-visible');
  return true;
 };

};
// vilidate the city

 //get all input in one Array

function validateRadio(){

  const checkRadio = document.querySelector("input[name='location']:checked");
  if(!checkRadio){ // if radio is not chosen, show error message
    formData[5].setAttribute('data-error','Veuillez choisir une ville');
    formData[5].setAttribute('data-error-visible',true);
    return false;}

  else {
      formData[5].removeAttribute('data-error');
      formData[5].removeAttribute('data-error-visible');
    return true;
   }};


// validate general condition

  const checkBox1 = document.getElementById("checkbox1");
  const checkBox2 = document.getElementById("checkbox2");

  function validateCondition(){
    if(!checkBox1.checked == true){  //if first condition is not chosen
    formData[6].setAttribute('data-error','Veuillez vérifier que vous acceptez les conditions');
    formData[6].setAttribute('data-error-visible',true);
    return false;
    }
    
    else {
      formData[6].removeAttribute('data-error');
      formData[6].removeAttribute('data-error-visible');
    return true;
        }
  };
    

 // function show validation message

 function showMessage() {

  inscription.style.display = "none";
  newDiv.style.display = "flex";
 };
 
// add event close validation message

btnClose.addEventListener("click",closeWindow);


// fucntion close window by click the arrow
document.querySelectorAll(".close")
.forEach(close => close.addEventListener("click",closeWindow));

function closeWindow() {
modalbg.style.display = "none"; 
location.reload();/*reload page*/
};

// add logo and nav into modal, version mobile

const copy = document.getElementById("myTopnav").cloneNode(true);
copy.setAttribute('id','myTopnav1');
modalbg.appendChild(copy);
modalbg.insertBefore(copy,inscription); //in html, deplace div topnav before modal 
//test code
const regexBirthday = /^([0-9]{2})([0-9]{2})([0-9]{4})$/;

function aaa(){
console.log(copy);
/* console.log(checkBox1.checked == true);*/
};
aaa(); 