"use client";
import Login from "@/components/Login";
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";

export default function LoginPage() {
  
  return (
    <RecoilRoot override={false}>
        <Login />
    </RecoilRoot>
  );
}
