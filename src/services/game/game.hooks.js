// const { authenticate } = require('feathers-authentication').hooks;
// const { associateCurrentUser } = require('feathers-authentication-hooks');
// const joinGame = require('../../hooks/join-game');
// const { isGameFull } = require('../../hooks/join-game');
// const checkWinner = require('../../hooks/check-winner');
// const { populate } = require('feathers-hooks-common');
// const createGame = require('../../hooks/create-game');
//
// const ownerSchema = {
//   include: {
//     service: 'users',
//     nameAs: 'owner',
//     parentField: 'userId',
//     childField: '_id',
//   }
// };
//
// module.exports = {
//   before: {
//     all: [],
//     find: [],
//     get: [],
//     create: [createGame(), associateCurrentUser],
//     update: [isGameFull, joinGame(), checkWinner()],
//     patch: [isGameFull, joinGame(), checkWinner()],
//     remove: []
//   },
//
//   after: {
//     all: [populate({ schema: ownerSchema })],
//     find: [],
//     get: [],
//     create: [],
//     update: [],
//     patch: [],
//     remove: []
//   },
//
//   error: {
//     all: [],
//     find: [],
//     get: [],
//     create: [],
//     update: [],
//     patch: [],
//     remove: []
//   }
// };
