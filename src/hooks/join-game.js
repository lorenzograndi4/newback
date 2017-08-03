'use strict';

const errors = require('feathers-errors');
// const isGameFull = require('./is-game-full');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// const errors = require('feathers-errors');

function isGameFull(game) {
  const { players } = game;
  return players.length > 2;
}


module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function(hook) {

    // see if hook.data has { join: boolean }
    // only let them through if they are trying to join, otherwise return promise
    if (hook.data.join === undefined) return Promise.resolve(hook);

    const currentUser = hook.params.user;

    return  hook.app.service('games').get(hook.id) // see if player is present
      .then((game) => {
        const players = game.players;
        // const wantsToJoin = hook.data.join;
        // const joined = players.map((p) => (p.userId)).includes(currentUser._id);
        // hook.data = {};
        hook.data.players = game.players.concat({ userId: currentUser._id })
        hook.data = {
          players: players.concat({ userId: currentUser._id})
        };

        // if (isGameFull(game)) {
        //   throw new errors.Unprocessable('Sorry, this game is full!');
        // }
        //
        // if (!joined && wantsToJoin) {
        //   hook.data = {
        //     players: players.concat({ userId: currentUser._id})
        //   };
        // }
        //
        // if (joined && !wantsToJoin) {
        //   hook.data = {
        //     players: players.filter((p) => (p.userId !== currentUser._id))
        //   };
        // }

        return Promise.resolve(hook);
      });
  };
};
