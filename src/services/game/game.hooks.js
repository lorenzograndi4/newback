const { authenticate } = require('feathers-authentication').hooks;

const joinGame = require('../../hooks/join-game');

const populatePlayers = require('../../hooks/populate-players');

const createGame = require('../../hooks/create-game');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame()],
    patch: [joinGame()],
    remove: []
  },

  after: {
    all: [populatePlayers()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
