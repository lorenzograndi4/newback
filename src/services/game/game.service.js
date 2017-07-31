// Initializes the `game` service on path `/game`
const createService = require('feathers-mongoose');
const createModel = require('../../models/game.model');
const hooks = require('./game.hooks');
const filters = require('./game.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'game',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('game');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
