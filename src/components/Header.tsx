'use client'
import React, { createContext } from "react";
import { RecoilRoot } from "recoil";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="sticky mt-10 top-0 left-0 w-full min-w-[430px] px-10 max-w-7xl z-9 hover:bg-white/10 rounded-2xl">
      <RecoilRoot>
        <HeaderNav />
      </RecoilRoot>
    </header>
  );
}
