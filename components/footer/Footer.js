import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm">© 2024 Magstr. All rights reserved.</p>
        <nav className="flex items-center space-x-6">
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline" href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
