//let heading = document.querySelector("h1");
//heading.innerHTML = "Hello World";

//typewriter js plugin: https://github.com/tameemsafi/typewriterjs

new Typewriter("h1", {
  strings: "Hello World, thank you for getting in touch", // in array ["Hello World"] to show and remove // "" to show and still
  autoStart: true,
  cursor: "", // to remove pipe
  delay: 10, // faster
});

// Challenge 2
let heading = document.querySelector("#challenge-2");
heading.innerHTML = "Karina Romano Perozzo";

// Challenge 3
new Typewriter("#challenge-3", {
  strings: "Karina Romano Perozzo", // in array ["Hello World"] to show and remove // "" to show and still
  autoStart: true,
  cursor: "🎾", // to remove pipe
  delay: 10, // faster
});
