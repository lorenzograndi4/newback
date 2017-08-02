const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');
const createGame = require('../../hooks/create-game');

const ownerSchema = {
  include: {
    service: 'users',
    nameAs: 'owner',
    parentField: 'ownerId',
    childField: '_id'
  }
};

module.exports = {
  before: {
    all: [], // authenticate('jwt')
    find: [],
    get: [],
    create: [authenticate('jwt'), createGame()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [populate({ schema: ownerSchema })],
    update: [],
    patch: [],
    remove: [populate({ schema: ownerSchema })]
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
