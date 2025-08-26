import React, { useState } from 'react';

// This is the main component for the entire website.
// The 'App' component contains all the code for your site's pages and layout.
export default function App() {
  // We use a state variable 'page' to keep track of which page is currently displayed.
  // The 'home' page is shown by default.
  const [page, setPage] = useState('home');

  // This function handles opening the Razorpay payment links in a new tab.
  const handlePayment = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // This is the main layout of the website. It includes a navigation bar and the current page content.
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg backdrop-blur-md bg-opacity-80">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Brand Name */}
          <h1 className="text-2xl font-bold text-red-600">Swadist Namkeen</h1>
          {/* Navigation Links */}
          <div className="space-x-4">
            <button
              onClick={() => setPage('home')}
              className={`font-semibold transition-colors duration-300 ${
                page === 'home' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setPage('contact')}
              className={`font-semibold transition-colors duration-300 ${
                page === 'contact' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="pt-24 pb-12">
        {/* Conditional rendering: show the 'home' page if 'page' is 'home' */}
        {page === 'home' && (
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                Taste the Tradition, Feel the Crunch
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Experience the authentic flavor of our handcrafted Channa Namkeen.
              </p>
            </div>

            {/* Products Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Card for 100g Pack */}
              <div className="rounded-2xl bg-white p-8 shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                    {/* Shopping Bag Icon (inline SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-gray-900">Swadist Channa Namkeen</h3>
                  <p className="mt-2 text-xl text-gray-600">100 g</p>
                  <p className="mt-4 text-center text-gray-500">
                    A perfect snack for your cravings. Crispy, delicious, and full of flavor.
                  </p>
                  {/* Buy Now Button with the provided Razorpay link */}
                  <button
                    onClick={() => handlePayment('https://rzp.io/rzp/gi0abJN7')}
                    className="mt-8 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Card for 200g Pack */}
              <div className="rounded-2xl bg-white p-8 shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                    {/* Shopping Bag Icon (inline SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-gray-900">Swadist Channa Namkeen</h3>
                  <p className="mt-2 text-xl text-gray-600">200 g</p>
                  <p className="mt-4 text-center text-gray-500">
                    Double the crunch, double the taste! Perfect for sharing with family and friends.
                  </p>
                  {/* Buy Now Button with the provided Razorpay link */}
                  <button
                    onClick={() => handlePayment('https://rzp.io/rzp/X8AcsLGu')}
                    className="mt-8 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conditional rendering: show the 'contact' page if 'page' is 'contact' */}
        {page === 'contact' && (
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                We'd love to hear from you! Contact us through the details below.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="mt-12 flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
              {/* Email Card */}
              <a
                href="mailto:swdistfood@gmail.com"
                className="flex items-center space-x-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  {/* Mail Icon (inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-red-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">swdistfood@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    {/* Phone Icon (inline SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">
                      <a href="https://wa.me/9918579142" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">9918579142</a>
                      , <a href="https://wa.me/6307474558" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">6307474558</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-6 text-center text-gray-300">
        <p>&copy; 2024 Swadist Namkeen. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
