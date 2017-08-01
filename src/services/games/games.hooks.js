// const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');

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
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: ownerSchema })],
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
