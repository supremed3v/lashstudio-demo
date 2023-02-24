import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-40 body-font border-b sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky">
        <Link href="/" legacyBehavior>
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              className="text-white p-2 rounded-full"
              src="/logo.png"
              width={50}
              height={50}
              alt="logo"
            />
            <span className="ml-3 text-xl text-gray-900">WS Lash Studio</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" legacyBehavior>
            <a className="mr-5 hover:text-gray-900">About Us</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="mr-5 hover:text-gray-900">Services</a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="mr-5 hover:text-gray-900">Gallery</a>
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-white transition duration-300 ease-in-out">
          Book Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
