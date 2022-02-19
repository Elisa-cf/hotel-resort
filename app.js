// SEARCH BOX: 

function searchRoom() {
 // DOM
const input = document.getElementById('search-input').value.toLowerCase();
// console.log(input)

const cardContainer = document.getElementById('card-lists');
// console.log(cardContainer);

const cards = cardContainer.getElementsByClassName('card');
// console.log(cards);


 

for(let i = 0; i < cards.length;  i++) {
 let title = cards[i].querySelector('.card-body h2.card-title');
 console.log(title)

 if(title.innerText.toLowerCase().indexOf(input) > -1){
  cards[i].style.display = "";
 } else {
  cards[i].style.display = "none";
 }
}
}

// FILTER BUTTONS


//filter all

filterSelection("all")
function filterSelection(c) {
 var x, i;
 x = document.getElementsByClassName("filterDiv");
 if (c == "all") c = "";
 // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
 for (i = 0; i < x.length; i++) {
  removeClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
 }
}


// Show filtered elements
function addClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
   element.className += " " + arr2[i];
  }
 }
}

// Hide elements that are not selected
function removeClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
   arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
 }
 element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it) with FOR EACH
var btns = document.querySelectorAll(".btn");
Array.from(btns).forEach(item => {
 item.addEventListener("click", () => {
  var selected = document.getElementsByClassName("active");
  selected[0].className = selected[0].className.replace(" active", "");
  item.className += " active";
 });
});



//WITH FOR LOOP INSTEAD OF FOR EACH: 
// // Add active class to the current control button (highlight it): if you do have an active class set on the button element to start with:

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//  btns[i].addEventListener("click", function () {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//  });
// }


 // //Add active class to the current control button (highlight it). Version if you do not have an active class set on the button element to start with:

// //Get the container element
// var btnContainer = document.getElementById("myBtnContainer");

// Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//  btns[i].addEventListener("click", function () {
//   var current = document.getElementsByClassName("active");

//   If there's no active class
//   if (current.length > 0) {
//    current[0].className = current[0].className.replace(" active", "");
//   }

//   Add the active class to the current/clicked button
//   this.className += " active";
//  });
// }


// HAMBURGUER MENU

function myFunction() {
 var x = document.getElementById("myLinks");
 if (x.style.display === "block") {
  x.style.display = "none";
 } else {
  x.style.display = "block";
 }
}
