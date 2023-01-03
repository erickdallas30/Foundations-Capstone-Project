//front end request(get,post, delete) and functions for favorite game list

const gameBox = document.querySelector("#gameBox");
const form = document.querySelector("form");

const baseURL = `http://localhost:5000/api/games`;

const GameGenerartor = ({ data: games }) => displayGames(games);
const error = (err) => console.log(err.response.data);

const getAllGames = () => 
axios.get(baseURL).then(GameGenerartor).catch(error);
const createGame = (body) =>
  axios.post(baseURL, body).then(GameGenerartor).catch(error);
const deleteGame = (id) =>
  axios.delete(`${baseURL}/${id}`).then(GameGenerartor).catch(error);

function submitGameInfo(e) {
  e.preventDefault();

  let title = document.querySelector("#title");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    title: title.value,
    imageURL: imageURL.value,
  };

  createGame(bodyObj);

  title.value = "";
  imageURL.value = "";
}

function createGameBox(game) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game-box");

  gameCard.innerHTML = `<img alt='game image' src=${game.imageURL} class="game-image"/>
    <p class="game-title">${game.title}</p>
    <button class = "deleteBtn" onclick="deleteGame(${game.id})">Remove</button>
    `;

  gameBox.appendChild(gameCard);
}

function displayGames(arr) {
  gameBox.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createGameBox(arr[i]);
  }
}

form.addEventListener("submit", submitGameInfo);

getAllGames();

//dark mode function
function darkMode() {
  let element = document.body;
  element.classList.toggle("color-mode");
}
