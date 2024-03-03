"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/anime">Sports</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
