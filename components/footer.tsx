"use client";

export function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Chinese Language Tutor. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
