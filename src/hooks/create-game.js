// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars


  return function createGame (hook) {

    const currentUser = hook.params.user;
    hook.data.title = `${currentUser.userName}'s game`;
    hook.data.playerIds = [hook.params.user._id];
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
