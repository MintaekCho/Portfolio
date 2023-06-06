"use client";
import { loginState } from "@/atom/atom";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const router = useRouter();

  const [loginError, setLoginError] = useState<string>("");
  const [login, setLogin] = useRecoilState(loginState);
  console.log(login);

  const handleSubmit = () => {
    if (
      id === process.env.NEXT_PUBLIC_ADMIN_ID &&
      pw === process.env.NEXT_PUBLIC_ADMIN_PW
    ) {
      setLogin(!login);
      router.push("/");
    } else {
      setLoginError("아이디 비밀번호가 일치하지 않습니다.");
      setTimeout(() => {
        setLoginError("");
      }, 3000);
    }
  };

  useEffect(() => {
    if(login) {
      console.log('로그인됨')
        redirect('/')
    }
}, [])
  return (
    <div className="w-full mt-28 max-w-[1240px] min-w-[460px] flex items-center justify-center">
      <section className="flex flex-col items-center gap-4 p-20 bg-white/20 rounded-2xl">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <label className="p-2 text-lg" htmlFor="loginId">
              아이디
            </label>
            <label className="p-2 text-lg" htmlFor="loginPw">
              비밀번호
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="p-2 text-lg text-black outline-none"
              type="text"
              name="loginId"
              onChange={(e) => setId(e.target.value)}
              value={id}
              placeholder="아이디를 입력해주세요"
            />
            <input
              className="p-2 text-lg text-black outline-none"
              type="password"
              name="loginPw"
              onChange={(e) => setPw(e.target.value)}
              value={pw}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </div>

        {loginError && (
          <p className="text-red-500 text-sm font-bold">{loginError}</p>
        )}
        <button className="w-3/5 p-2 " onClick={handleSubmit}>
          로그인
        </button>
      </section>
    </div>
  );
}
