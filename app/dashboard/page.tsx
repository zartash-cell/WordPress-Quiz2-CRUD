"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false); // Only show dashboard after token is found
    }
  }, [router, token]);

  // Fetch blogs for logged-in user
  async function fetchBlogs() {
    if (!token) return;

    const res = await fetch("/api/blog", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (!data.error) setBlogs(data.blogs || []);
  }

  // Create or Update blog
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!token) return alert("You are not logged in");

    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `/api/blog/${editingId}` : "/api/blog";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();

    if (data.success) {
      alert(editingId ? "Blog updated successfully!" : "Blog created successfully!");
      setTitle("");
      setContent("");
      setEditingId(null);
      fetchBlogs();
    } else {
      alert(data.error || "Operation failed");
    }
  }

  // Delete blog
  async function handleDelete(id: string) {
    if (!token) return alert("You are not logged in");
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const res = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (data.success) {
      alert("Blog deleted successfully!");
      fetchBlogs();
    } else {
      alert(data.error || "Delete failed");
    }
  }

  // Edit blog
  function handleEdit(blog: Blog) {
    setTitle(blog.title);
    setContent(blog.content);
    setEditingId(blog._id);
  }

  useEffect(() => {
    if (token) fetchBlogs();
  }, [token]);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Checking authentication...</div>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Manage your blog posts</p>

      {/* Create/Edit Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-xl mb-10"
      >
        <h2 className="text-2xl font-bold mb-4">
          {editingId ? "Edit Blog" : "Create New Blog"}
        </h2>

        <input
          type="text"
          placeholder="Blog Title"
          className="w-full border px-3 py-2 rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Blog Content"
          className="w-full border px-3 py-2 rounded mb-4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Blog" : "Create Blog"}
        </button>

        {editingId && (
          <button
            type="button"
            className="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* User Blogs List */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Your Blogs</h2>

        {blogs.length === 0 && <p>No blogs yet. Create one above!</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 border rounded shadow bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Created: {new Date(blog.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  className="bg-yellow-500 text-white px-4 py-1 rounded"
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
