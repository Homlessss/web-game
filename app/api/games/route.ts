import connectDB from "@/lib/db";
import Game from "@/models/Game";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, srcGame, srcThumbnail, key } = await req.json();
    await connectDB();
    await Game.create({ name, srcGame, srcThumbnail, key });
    return NextResponse.json({ message: 'Success' }, { status: 201 })
}

export async function GET() {
    await connectDB();
    const games = await Game.find();
    return NextResponse.json({ games });
}

export async function DELETE(req: NextRequest) {
    const key = req.nextUrl.searchParams.get("key");
    const data = {any: key};
    await connectDB();
    await Game.findOneAndDelete(data);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
}