// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if (hook.data.joinGame === undefined) {
          throw new errors.Forbidden('You must be the author to change a game like that.');
        }

        const action = hook.data.joinGame ? '$addToSet' : '$pull';
        let data = {};
        data[action] = { playerIds: hook.params.user._id };
        hook.data = data;
      });
  };
};
