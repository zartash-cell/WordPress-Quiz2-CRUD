"use client";

import { useState } from "react";
import { FaCog, FaLightbulb, FaUsers } from "react-icons/fa"; // Importing some React Icons

export default function Blog() {
  // Static blog posts data
  const posts = [
    {
      id: 1,
      title: "Why Choose Our CMS?",
      content: "Learn why our Content Management System is the best option for your website.",
      date: "March 21, 2025",
      icon: <FaCog className="text-4xl text-blue-500" />, // Icon for this post
    },
    {
      id: 2,
      title: "How to Get Started with CMS",
      content: "This guide will walk you through the process of setting up your CMS and managing your content.",
      date: "April 15, 2025",
      icon: <FaLightbulb className="text-4xl text-blue-500" />, // Icon for this post
    },
    {
      id: 3,
      title: "Top Features of Our CMS",
      content: "Explore the key features that make our CMS stand out from the competition.",
      date: "May 5, 2025",
      icon: <FaUsers className="text-4xl text-blue-500" />, // Icon for this post
    },
  ];

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null); // Store selected post

  const handleReadMore = (post: any) => {
    setSelectedPost(post); // Set the selected post
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedPost(null); // Clear the selected post
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">Blog</h1>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                {post.icon}
              </div>

              {/* Post Title */}
              <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                {post.title}
              </h2>

              {/* Post Date */}
              <p className="text-sm text-gray-600 text-center mb-4">{post.date}</p>

              {/* Post Content */}
              <p className="text-lg text-gray-800 mb-6">{post.content}</p>

              {/* Read More Button */}
              <button
                onClick={() => handleReadMore(post)} // Open the modal with the post
                className="text-blue-500 font-semibold hover:underline block text-center"
              >
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Full Post */}
        {isModalOpen && selectedPost && (
          <div className="fixed inset-0 bg-blue-200 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/2 max-w-lg">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">{selectedPost.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{selectedPost.date}</p>
              <p className="text-lg text-gray-800">{selectedPost.content}</p>
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
