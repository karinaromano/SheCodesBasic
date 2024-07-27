//For Challenge 1: Disable the button from JavaScript using SetAttribute

let challenge1Button = document.querySelector("#challenge-1"); // need to add # to id
challenge1Button.setAttribute("disabled", "disabled");

//For Challenge 2: Change the background color of the button below to green from JavaScript
//using the style element property.

let challenge2Button = document.querySelector("#challenge-2");
challenge2Button.style.background = "green";

//For Challenge 3: Change the background color of the button below to red using classList by
//adding a class called danger. Make sure to define the danger class in your CSS.

let challenge3Button = document.querySelector("#challenge-3");
challenge3Button.classList.add("danger");
