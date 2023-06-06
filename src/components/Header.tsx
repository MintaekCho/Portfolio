"use client";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Category from "./Category";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const handleCategory = () => setCategoryVisible(!categoryVisible);
  return (
    <header className="sticky top-0 left-0 w-full min-w-[430px] px-10 max-w-7xl z-9 hover:bg-white/10 rounded-2xl ">
      <RecoilRoot override={false}>
        <HeaderNav handleCategory={handleCategory}/>
        <Category
          closeCategory={handleCategory}
          categoryVisible={categoryVisible}
        />
      </RecoilRoot>
    </header>
  );
}
