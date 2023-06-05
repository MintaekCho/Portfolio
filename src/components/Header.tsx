"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Category from "./Category";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { loginState } from "@/atom/atom";

export default function Header() {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const handleCategory = () => setCategoryVisible(!categoryVisible);
  const router = useRouter();


  const goLoginPage = () => router.push("/login");
  return (
    <header className="sticky mt-10 top-0 left-0 w-full min-w-[430px] px-10 max-w-7xl z-9 hover:bg-white/10 rounded-2xl">
      <nav className="flex justify-center items-center p-4 relative">
        <div className="text-white text-4xl absolute left-0">
          <GiHamburgerMenu
            className="cursor-pointer hover:scale-110 ease-in-out duration-300"
            onClick={handleCategory}
          />
        </div>
        <Link href={"/"} className="text-3xl font-bold">
          Min&apos;s Portfolio
        </Link>
        <div
          onClick={goLoginPage}
          className="text-4xl flex flex-col items-center absolute right-0 cursor-pointer"
        >
          <CgProfile />
          <span className="text-sm font-bold">admin</span>
        </div>
        <Category
          closeCategory={handleCategory}
          categoryVisible={categoryVisible}
        />
      </nav>
    </header>
  );
}
