const { authenticate } = require('feathers-authentication').hooks;

const joinGame = require('../../hooks/join-game');

const isGameFull = require('../../hooks/is-game-full');

const checkWinner = require('../../hooks/check-winner');

const { populate } = require('feathers-hooks-common');

const createGame = require('../../hooks/create-game');

const ownerSchema = {
  include: {
    service: 'users',
    nameAs: 'owner',
    parentField: 'userId',
    childField: '_id',
  }
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame(), checkWinner()],
    patch: [joinGame(), checkWinner()],
    remove: []
  },

  after: {
    all: [populate({ schema: ownerSchema }), isGameFull()],
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
