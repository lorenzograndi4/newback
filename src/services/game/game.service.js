// // Initializes the `game` service on path `/game`
// const createService = require('feathers-mongoose');
// const createModel = require('../../models/games.model');
// const hooks = require('./game.hooks');
// const filters = require('./game.filters');
//
// module.exports = function () {
//   const app = this;
//   const Model = createModel(app);
//   const paginate = app.get('paginate');
//
//   const options = {
//     name: 'games',
//     Model,
//     paginate
//   };
//
//   // Initialize our service with any options it requires
//   app.use('/games', createService(options));
//
//   // Get our initialized service so that we can register hooks and filters
//   const service = app.service('games');
//
//   service.hooks(hooks);
//
//   if (service.filter) {
//     service.filter(filters);
//   }
// };
