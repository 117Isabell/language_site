"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="text-2xl font-bold">
            Chinese Language Tutor
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/Chineselearningwithme/events"
                className="bg-yellow-400 text-blue-800 hover:bg-yellow-500 px-3 py-1 rounded-full transition-colors"
              >
                Free Online Meetups
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-300 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-yellow-300 transition-colors"
              >
                Blogs
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-yellow-300 transition-colors">
                Textbooks
              </button>
              <div
                className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg 
                            invisible group-hover:visible opacity-0 group-hover:opacity-100 
                            transition-all duration-300 mt-1 z-50"
              >
                <Link
                  href="/textbooks/children"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-blue-800"
                >
                  For Children
                </Link>
                <Link
                  href="/textbooks/adults"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-blue-800"
                >
                  For Adults
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
