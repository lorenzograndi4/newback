'use strict';

const errors = require('feathers-errors');
const isGameFull = require('./isGameFull');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function(hook) {

    if (hook.data.join === undefined) return Promise.resolve(hook); // see if hook.data has { join: boolean }

    const currentUser = hook.params.user;

    return hook.app.service('games').get(hook.id) // see if player is present
      .then((game) => {
        const players = game.players;
        const wantsToJoin = hook.data.join;
        const joined = players.map((p) => (p.userId)).includes(currentUser._id);
        hook.data = {};

        if (isGameFull(game)) {
          throw new errors.Unprocessable('Sorry, this game is full!');
        }

        if (!joined && wantsToJoin) {
          hook.data = {
            players: players.concat({ userId: currentUser._id})
          };
        }

        if (joined && !wantsToJoin) {
          hook.data = {
            players: players.filter((p) => (p.userId !== currentUser._id))
          };
        }

        return Promise.resolve(hook);
      });
  };
};
