import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// DELETE /api/blog/[id]
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  await connectDB();

  // ===============================
  // Auth disabled for assignment
  // ===============================
  // const authHeader = req.headers.get("Authorization") || "";
  // const token = authHeader.replace("Bearer ", "");
  // const user = verifyToken(token);
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const blog = await Blog.findById(id);
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  // Skip ownership check for assignment
  // if (blog.userId !== (user as any).userId)
  //   return NextResponse.json({ error: "Not allowed" }, { status: 403 });

  await blog.deleteOne();
  return NextResponse.json({ success: true });
}
