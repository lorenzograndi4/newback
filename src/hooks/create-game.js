// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  return function createGame (hook) {

    const currentUser = hook.params.user;

    hook.data.title = `${currentUser.name}'s game`;
    hook.data.ownerId = currentUser._id; // assign the owner of the game
    hook.data.owner = [{
      userId: currentUser._id
    }]; // add the owner to the players, as the first player in the game
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
