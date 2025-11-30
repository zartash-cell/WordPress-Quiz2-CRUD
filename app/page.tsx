"use client"; // Marking the file as a client component

import Image from "next/image";
import { FaUserAlt, FaRegHandshake, FaSearch, FaMobileAlt } from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from "next/navigation"; // To redirect user to login page

export default function Home() {
  // State to control visibility of contact message box
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const router = useRouter(); // Hook for navigation

  // Handle contact message input change
  const handleContactChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(e.target.value);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactMessage.trim() === "") {
      alert("Please enter a message!");
      return;
    }
    alert("Your message has been sent. We will contact you shortly.");
    setIsContactVisible(false);
    setContactMessage(""); // Clear message after submission
  };

  // Handle redirect to the login page
  const handleGetStarted = () => {
    router.push("/login"); // Redirect to login page
  };

  return (
    <>
      <main className="flex flex-col bg-white">
        {/* Home Section: Left Half */}
        <section className="flex min-h-screen bg-white" id="home">
          <div className="w-1/2 flex flex-col justify-center items-start px-16">
            <h1 className="text-6xl font-bold text-black leading-snug mb-6">
              Content <br />
              Management <br />
              System
            </h1>
            <p className="text-black text-lg mb-6 max-w-md">
              This CMS allows you to manage your content easily and efficiently. Navigate the site to explore all features and functionalities.
            </p>
            <button
              className="bg-blue-500 text-black font-bold px-8 py-3 rounded uppercase text-xl hover:text-red-600 hover:bg-blue-600 transition"
              onClick={handleGetStarted} // Redirect to login page
            >
              Get Started
            </button>
          </div>

          {/* Right Half: Image */}
          <div className="w-1/2 relative">
            <Image
              src="/images/img.avif" // Replace with your image path
              alt="CMS Dashboard"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Updated About Section without Image */}
        <section className="flex flex-col min-h-screen bg-gray-100 py-16" id="about">
          <div className="px-16 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-black mb-6">About the CMS</h2>
            <p className="text-lg text-black mb-6 max-w-3xl">
              Our Content Management System (CMS) offers a robust, user-friendly platform that makes managing your website content a breeze.
              Whether you're managing blog posts, images, or pages, our CMS ensures seamless editing and efficient content deployment.
              With built-in SEO tools, responsive design options, and support for multiple users, it's the perfect solution for businesses, bloggers, and enterprises alike.
            </p>

            <h3 className="text-3xl font-semibold text-black mb-6">Why Choose Our CMS?</h3>
            
            {/* Feature List with Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <FaUserAlt className="text-blue-500 text-4xl mb-4" />
                <h4 className="font-bold text-xl">User-Friendly Interface</h4>
                <p className="text-center text-lg mt-2">Intuitive design that allows even beginners to manage content with ease.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <FaRegHandshake className="text-blue-500 text-4xl mb-4" />
                <h4 className="font-bold text-xl">Collaborative Features</h4>
                <p className="text-center text-lg mt-2">Multi-user support with role-based access for teams to work together seamlessly.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <FaSearch className="text-blue-500 text-4xl mb-4" />
                <h4 className="font-bold text-xl">SEO Tools</h4>
                <p className="text-center text-lg mt-2">Built-in tools to help your content rank higher in search engines.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <FaMobileAlt className="text-blue-500 text-4xl mb-4" />
                <h4 className="font-bold text-xl">Responsive Design</h4>
                <p className="text-center text-lg mt-2">Mobile-friendly design ensures that your content looks great on any device.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-16" id="contact">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-lg text-black mb-6">
              If you have any questions or need assistance, feel free to reach out to us. Our team is here to help you.
            </p>
            <button 
              className="bg-blue-500 text-black font-bold px-8 py-3 rounded uppercase text-xl hover:text-red-600 hover:bg-blue-600 transition"
              onClick={() => setIsContactVisible(true)} // Show message box
            >
              Contact Support
            </button>

            {/* Contact Form (Message Box) */}
            {isContactVisible && (
              <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Send Us Your Message</h3>
                <textarea
                  value={contactMessage}
                  onChange={handleContactChange} // Ensure correct event type
                  placeholder="Type your message here..."
                  className="w-full p-4 border border-gray-300 rounded-md mb-4"
                  rows={5}
                ></textarea>
                <div className="flex justify-between">
                  <button
                    onClick={handleContactSubmit}
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                  >
                    Send Message
                  </button>
                  <button
                    onClick={() => setIsContactVisible(false)}
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
