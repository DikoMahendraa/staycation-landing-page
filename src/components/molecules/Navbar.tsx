import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <div className="flex justify-between w-full py-4 container">
        <p className="text-3xl font-semibold">
          <span className="text-cyan-600">Stay</span>cation
        </p>
        <div>
          <ul className="flex gap-12">
            <Link href="/" className="text-base font-normal text-cyan-600">
              Home
            </Link>
            <Link href="/" className="text-base text-gray-600 font-normal">
              Browse by
            </Link>
            <Link href="/" className="text-base text-gray-600 font-normal">
              Stories
            </Link>
            <Link href="/" className="text-base text-gray-600 font-normal">
              Agents
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
