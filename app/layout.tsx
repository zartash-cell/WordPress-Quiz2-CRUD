// app/layout.tsx
import "./globals.css"; // Your global styles
import Navbar from "./components/Navbar"; // Import the Navbar component

export const metadata = {
  title: "My CMS",
  description: "A simple CMS using Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="bg-white text-gray-800">
          {/* Navbar is rendered here */}
          <Navbar />

          {/* Main content of each page */}
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
