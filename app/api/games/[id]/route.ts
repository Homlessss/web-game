import connectDB from "@/lib/db";
import Game from "@/models/Game";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const { newName: name, newSrcGame: srcGame, newSrcThumbnail: srcThumbnail, newKey: key } = await req.json();
  await connectDB();
  await Game.findByIdAndUpdate(id, { name, srcGame, srcThumbnail, key });
  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function GET(req: Request, { params }: any) {
  const { id } = params;
  await connectDB();
  const game = await Game.findOne({ _id: id });
  return NextResponse.json({ game }, { status: 200 });
}     
