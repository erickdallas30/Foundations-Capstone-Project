const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getGames,
    createGame,
    deleteGame,
  } = require("./controller");

// get, post, delete endpoints for favorite game list

app.get(`/api/games`, getGames);
app.post(`/api/games`, createGame);
app.delete(`/api/games/:id`, deleteGame);

app.listen(5000, () => console.log('Server running on 5000'))