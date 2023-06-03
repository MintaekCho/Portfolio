import React from "react";

export default function About() {
  return (
    <section className="w-full max-w-[1240px] flex flex-col items-center justify-center p-8 bg-white/10 rounded-3xl">
      <span className="text-5xl text-purple-500 font-bold mb-4">ABOUT</span>
      <p className="font-bold text-sm md:text-lg xl:text-xl">
        트러블슈팅을 좋아하고 즐기는 개발자입니다.
      </p>
      <p className="font-bold text-sm md:text-lg xl:text-xl">
        새로운 기술 배우는 것을 기피하지 않고 지식이 쌓여갈때마다 성취감을
        느낍니다.
      </p>
      <div className="w-full mt-10">
        <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            <li className="py-8 text-2xl font-bold text-center bg-white/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-105 hover:text-3xl ease-in-out duration-300"><span>조민택</span></li>
        </ul>
      </div>
    </section>
  );
}
