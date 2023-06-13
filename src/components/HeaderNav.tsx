"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import { loginState } from "@/atom/atom";
import { useRouter } from "next/navigation";

export default function HeaderNav({ handleCategory }: any) {
  const router = useRouter();

  const goLoginPage = () => router.push("/login");
  return (
    <nav className="group flex justify-center items-center p-4 relative backdrop-blur-sm ">
      <div className="text-white text-4xl absolute left-0">
        <GiHamburgerMenu
          className="cursor-pointer hover:scale-110 ease-in-out duration-300 "
          onClick={handleCategory}
        />
      </div>
      <Link
        href={"/"}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold hover:tracking-widest ease-in-out duration-300"
      >
        Min&apos;s Portfolio
      </Link>
      <div
        onClick={goLoginPage}
        className="text-4xl flex flex-col items-center absolute right-0 cursor-pointer duration-300"
      >
        <CgProfile />
        <span className="text-sm font-bold">admin</span>
      </div>
    </nav>
  );
}
