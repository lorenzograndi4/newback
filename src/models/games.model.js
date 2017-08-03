// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const playerSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    // anything else?
  });

  const games = new Schema({
    title: { type: String },
    ownerId: { type: String },
    players: [playerSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', games);
};
