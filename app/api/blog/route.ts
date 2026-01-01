import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
// import { verifyToken } from "@/lib/auth"; // Auth disabled for assignment

// GET /api/blog
export async function GET(req: NextRequest) {
  await connectDB();

  // ===============================
  // Auth disabled for assignment
  // ===============================
  // const authHeader = req.headers.get("Authorization") || "";
  // const token = authHeader.replace("Bearer ", "");
  // const user = verifyToken(token);
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json({ blogs });
}

// POST /api/blog
export async function POST(req: NextRequest) {
  await connectDB();

  // ===============================
  // Auth disabled for assignment
  // ===============================
  // const authHeader = req.headers.get("Authorization") || "";
  // const token = authHeader.replace("Bearer ", "");
  // const user = verifyToken(token);
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();
  if (!title || !content)
    return NextResponse.json({ error: "Title and Content required" }, { status: 400 });

  const blog = await Blog.create({
    title,
    content,
    // userId: (user as any).userId, // skip userId for assignment
  });

  return NextResponse.json({ success: true, blog });
}
