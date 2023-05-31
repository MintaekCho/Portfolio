import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full px-10 max-w-7xl ">
      <nav className="flex justify-between items-center p-4 border-b">
        <Link href={'/'} className="text-3xl font-bold">Min's</Link>
        <ul className="flex gap-8 text-md font-bold">
          <li><Link href={'blog'}>Blog</Link> </li>
          <li><Link href={'about'}>About Me</Link></li>
          <li><Link href={'portfolio'}>Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
}
