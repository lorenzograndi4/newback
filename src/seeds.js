const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  userName: 'Lorenzo',
  email: 'lorenzonew@lorenzo.com',
  password: 'qwerty1'
};

const games = [
  {
    title: 'Test game',
  }
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        games.map((game) => {
          feathersClient.service('games').create(game)
            .then((result) => {
              // console.log('Game seeded...', result.title);
            }).catch((error) => {
              // console.error('Error seeding game!', error.message);
            });
        });
      })
      .catch(function(error){
        // console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    // console.error('Error creating user!');
  });
