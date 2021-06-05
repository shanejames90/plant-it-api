const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  gamesPlayed: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, game) => {
      return {
        id: game._id,
        gamesPlayed: game.gamesPlayed
      }
    }
  }
})

module.exports = mongoose.model('Game', gameSchema)
