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

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">
          Blog
        </h1>

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

              {/* Read More Link */}
              <a
                href={`/blog/${post.id}`} // Link to the detailed post page
                className="text-blue-500 font-semibold hover:underline block text-center"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
