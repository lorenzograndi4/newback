const users = require('./users/users.service.js');
// const game = require('./game/game.service.js');
const games = require('./games/games.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  // app.configure(game);
  app.configure(games);
};
