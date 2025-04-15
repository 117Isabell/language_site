"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="text-2xl font-bold">
            Chinese Language Tutor
          </Link>
        </h1>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <nav
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-blue-600 p-4"
              : "hidden"
          } md:block md:static`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <li className="flex justify-center">
              <a
                href="https://www.facebook.com/Chineselearningwithme/events"
                className="bg-yellow-400 text-blue-800 hover:bg-yellow-500 px-3 py-1 rounded-full transition-colors inline-block w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Online Meetups
              </a>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-yellow-300 transition-colors block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#blog"
                className="hover:text-yellow-300 transition-colors block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-yellow-300 transition-colors w-full text-center">
                Textbooks
              </button>
              <div
                className="md:absolute md:top-full md:left-0 w-48 bg-white rounded-md shadow-lg 
                          hidden group-hover:block mt-1 z-50"
              >
                <Link
                  href="/textbooks/children"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Children
                </Link>
                <Link
                  href="/textbooks/adults"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Adults
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-colors block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
