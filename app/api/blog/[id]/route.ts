import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { verifyToken } from "@/lib/auth";

interface Params {
  params: { id: string };
}

export async function DELETE(req: Request, { params }: Params) {
  await connectDB();

  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const blog = await Blog.findById(params.id);
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  if (blog.userId !== (user as any).userId)
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });

  await blog.deleteOne();
  return NextResponse.json({ success: true });
}
