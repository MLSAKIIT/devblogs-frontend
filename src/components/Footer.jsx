// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">
          Let’s get started on something great
        </h2>
        <p className="mb-8">
          Join 4,000+ startups already growing with Untitled.
        </p>
        <button className="px-4 py-2 bg-primary text-white rounded-lg">
          Start Free
        </button>

        <div className="mt-8">
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Company
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
