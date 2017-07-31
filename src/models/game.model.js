// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const squareSchema = new Schema({
    visible: { type: Boolean, required: true },
    rowNumbers: { type: Array, required: true },
    columnNumbers: { type: Array, required: true },
  });

  const playerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  });

  const game = new Schema({
    title: { type: String, required: true },
    squares: [squareSchema],
    players: [playerSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('game', game);
};
