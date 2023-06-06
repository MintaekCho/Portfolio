"use client";
import Login from "@/components/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function LoginPage() {

    
  
  return (
    <RecoilRoot>
        <Login />
    </RecoilRoot>
  );
}