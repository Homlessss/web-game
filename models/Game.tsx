import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema (
  {
    srcGame: String,
    srcThumbnail: String,
    name: String,
    key: String,
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);

export default Game;