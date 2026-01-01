import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
// import { verifyToken } from "@/lib/auth"; // Auth disabled for assignment

// DELETE /api/blog/[id]
export async function DELETE(
  request: Request,
  context: { params: { id: string } } 
) {
  const { params } = context;
  const { id } = params;

  await connectDB();

  // ===============================
  // AUTH DISABLED FOR ASSIGNMENT
  // ===============================
  /*
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  */

  const blog = await Blog.findById(id);
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  // ===============================
  // Skip user ownership check for assignment
  // ===============================
  /*
  if (blog.userId !== (user as any).userId)
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  */

  await blog.deleteOne();
  return NextResponse.json({ success: true });
}
