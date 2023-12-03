import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema(
  {
    name: String,
    category: Array,
    thumbnailURL: String,
    src: String,
    numOfPlayer: Number,
    rating: Number,
    key: String,
  },
  {
    timestamps: true,
  }
);

const game = mongoose.models.game || mongoose.model("game", gameSchema);

export default game;
