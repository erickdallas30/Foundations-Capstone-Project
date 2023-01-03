const games = require("./db.json");
let newID = 11;

//4 controller functions for favorite game list
module.exports = {
  getGames: (req, res) => res.status(200).send(games),

  createGame: (req, res) => {
    let { title, rating, imageURL } = req.body;
    let newGame = {
      id: newID,
      title,
      rating,
      imageURL,
    };
    games.push(newGame);
    res.status(200).send(games);
    newID++;
  },

  deleteGame: (req, res) => {
    let index = games.findIndex((elem) => elem.id === +req.params.id);
    games.splice(index, 1);
    res.status(200).send(games);
  },
};
