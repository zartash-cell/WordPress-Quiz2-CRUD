import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
  await connectDB();

  // Get JWT from header
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const blogs = await Blog.find({ userId: (user as any).userId }).sort({ createdAt: -1 });
  return NextResponse.json({ blogs });
}

export async function POST(req: Request) {
  await connectDB();

  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();
  if (!title || !content)
    return NextResponse.json({ error: "Title and Content required" }, { status: 400 });

  const blog = await Blog.create({ title, content, userId: (user as any).userId });
  return NextResponse.json({ success: true, blog });
}
