import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema(
  {
    name: String,
    category: Array,
    thumbnailURL: String,
    src: String,
    numOfPlayer: Number,
    rating: Number,
    key: Array,
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
