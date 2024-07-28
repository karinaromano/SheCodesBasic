function displayJoke(response) {
  //display the joke in the box
  //let jokeElement = document.querySelector("#joke");
  //jokeElement.innerHTML = response.data.answer;
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "😂",
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  // call the API
  // callback, insert the joke in the box
  let apiKey = "oc623atdd290f8f910a91f68b4d7d17d";
  let context = "Generate short jokes";
  let prompt =
    "You are a funny AI assitant that tells short and funny jokes. Please generate randoms and a variety of jokes but one at a time. Do not repeat the jokes. ";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML =
    "Hold your horses 🤠🐴. I'm generating a joke for you";

  axios.get(apiUrl).then(displayJoke);

  //not used = let jokeElement = document.querySelector("#joke");
  //not used = jokeElement.innerHTML = "Funny Joke";
}

let generatorButton = document.querySelector("#joke-button"); // we select the button here
//console.log(generatorButton);
generatorButton.addEventListener("click", generateJoke); // whenever we click on it, it will generate a Joke as per function above
