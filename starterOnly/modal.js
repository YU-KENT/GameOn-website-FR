function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
   /* x.className += " responsive";*/ // code d'origin
    x.classList.add ("responsive"); // correction,add classname "responsive"
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

//////////////////////////////////////////////


//add div validation message
const newDiv = document.createElement("div");
newDiv.className = "validation";
newDiv.innerHTML = "<p>Merci pour</p><p>Votre Inscription</p>";

const arrowClose = document.createElement("span");// add x
arrowClose.classList.add("close");
newDiv.appendChild(arrowClose);

const btnClose = document.createElement("button"); // add button "Fermer"
btnClose.className = "btn-close";
btnClose.innerHTML = "Fermer";
newDiv.appendChild(btnClose);

modalbg.appendChild(newDiv); //add inside div parent formulaire

//validate formulaire ,function principale

document.getElementById("myform")
.addEventListener("submit",validate);

  function validate(event) {
    event.preventDefault();
    event.stopPropagation();
    const conditions = //array for all validations
    [validatePrenom(),validateNom(),validateEmail(),validateBirth(),
    validateQuantity(),validateRadio(),validateCondition()]
  if(conditions.filter(valid => !valid).length != 0){  // after flitre, if there is one or plus de function return false
        return;
      }
   else{  showMessage(); // show confirmation de l'inscription
      
    }
};

//validate prenom

function validatePrenom(){
if (prenom.value.trim() === "" || prenom.value.length < 2) /* not empty or at least 2 characters */
{
formData[0].setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du prenom");
formData[0].setAttribute("data-error-visible", true);// add message error
return false;
}
else{
formData[0].removeAttribute('data-error');   // if it's correct remove message arror
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

if (birth.value == "") // input can't be empty
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


//function can't chose a future date
birth.setAttribute('max','2022-12-19'); // add attr "max"

function requireBirth () {
let today = new Date().toISOString().slice(0,10); //get current date
birth.setAttribute("max",today);
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

  const checkedRadio = document.querySelector("input[name='location']:checked");
  if(!checkedRadio){ // if radio is not chosen, show error message
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
    if(!checkBox1.checked){  //if first condition is not chosen
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
    

 // function show the confirmation message

 function showMessage() {

  inscription.style.display = "none";
  newDiv.style.display = "flex";
 };
 
// close button"fermer" 

btnClose.addEventListener("click",closeWindow);


// fucntion close window by click the arrow X
document.querySelectorAll(".close")
.forEach(close => close.addEventListener("click",closeWindow));

function closeWindow() {
modalbg.style.display = "none"; 
location.reload();/*reload page*/
};

// add logo and nav into modal, version mobile

const copy = document.getElementById("myTopnav").cloneNode(true); // copy header
copy.setAttribute('id','myTopnav1'); //add id 
modalbg.appendChild(copy); // deplace the copy in modal 
modalbg.insertBefore(copy,inscription); //in html, deplace div "myTopnav1" before div modal 

