import connectMongoDB from "@/libs/mongodb";
import game from "@/models/game";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, category, thumbnailURL, src, numOfPlayer, rating, key } =
    await request.json();
  await connectMongoDB();
  await game.create({
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
