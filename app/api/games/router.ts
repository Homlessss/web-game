import connectMongoDB from "@/libs/mongodb";
import Game from "@/models/game";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, category, thumbnailURL, src, numOfPlayer, rating, key } =
    await request.json();
  await connectMongoDB();
  await Game.create({
    name,
    category,
    thumbnailURL,
    src,
    numOfPlayer,
    rating,
    key,
  });
  return NextResponse.json({ message: "Game Created" }, { status: 201 });
}
 
// export async function GET() {
//   await connectMongoDB();
//   const games = await game.find({});
//   return NextResponse.json(games);
// }