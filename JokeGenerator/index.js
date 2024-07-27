//function showAnswer(response) {
//  alert(response.data.answer);
//}

document.getElementById("jokeButton").addEventListener("click", fetchJoke);

function showAnswer(response) {
  // Display the joke in the jokeContainer div instead of using alert
  document.getElementById(
    "jokeContainer"
  ).innerHTML = `<p>${response.data.answer}</p>`;
}

function fetchJoke() {
  let apiKey = "oc623atdd290f8f910a91f68b4d7d17d";
  let context =
    "You are a joker AI assistant, who tells people funny and respectful jokes, you do not use bad words nor racist jokes.";
  let prompt = "Please tell me a random joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("processing");
  axios.get(apiUrl).then(showAnswer);
}

let welcoming = document.querySelector("h1");
welcoming.innerHTML = "Click the button and have fun";
