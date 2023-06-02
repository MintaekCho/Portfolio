"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Category from "./Category";

export default function Header() {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const handleCategory = () => setCategoryVisible(!categoryVisible)
  return (
    <header className="w-full px-10 max-w-7xl relative z-9">
      <nav className="flex justify-center items-center p-4 relative">
        <div className="text-white text-4xl absolute left-0">
          <GiHamburgerMenu onClick={handleCategory}/>
        </div>
        <Link href={"/"} className="text-3xl font-bold">
          Min's Portfolio
        </Link>
        <Category closeCategory={handleCategory} categoryVisible={categoryVisible}/>
      </nav>
    </header>
  );
}
