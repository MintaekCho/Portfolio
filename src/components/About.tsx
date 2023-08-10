import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdAccessibilityNew } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import Profile from "./Profile";

export default function About() {
  const DES_STYLE = "text-sm md:text-md xl:text-lg";
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="w-4/5 max-w-[1240px] flex flex-col items-center justify-center p-8 bg-white/10 rounded-3xl"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-purple-500 font-bold mb-4">
        ABOUT
      </h1>
      <Profile />
      <ul className="flex flex-col gap-4 list-disc bg-white/10 p-8 rounded-lg">
        <li>
          <p className={DES_STYLE}>
            <b>트러블슈팅과 최신기술</b> 
            공부하는것을 좋아하며 계속된 성장을 위해
            노력합니다.
          </p>
        </li>
        <li>
          <p className={DES_STYLE}>
            이전 직장에서 반도체 장비에서 발생한 문제를 해결하는 업무를
            경험했습니다. 
            <br />
            주로 장비의 제어블록도와 탑재된 모듈의 공식문서를 분석하고, 이에
            따른 적절한 해결방안을 제시하는 업무였습니다. 
            <br />
            프로그래밍도 다양한 관점의 분석을 통해 효율적인 해결법을 찾아나가는
            과정이라는 점에서, 개발자라는 직업에 관심을 가지게 되었습니다.
          </p>
        </li>
        <li>
          <p className={DES_STYLE}>
            백엔드로 처음 개발 공부를 시작했지만, 프론트엔드와 협업 프로젝트를
            진행하는 과정에서 프론트엔드에 관심을 가지게 되었습니다. 
            <br />
            백엔드와 다르게 프론트엔드는 브라우저 등을 통해, 개발하는 과정에서
            시각적인 피드백을 즉각적으로 확인할 수 있었기 때문입니다. 
            <br />
            이에 프론트엔드 직무로 전향을 결심하게 되었습니다.
          </p>
        </li>
        <li>
          <p className={DES_STYLE}>
            백엔드 개발 경험을 통해 Java와 SpringBoot를 사용한 서버 구현이
            가능하며, NextJs 13 버전의 라우팅을 통한 CRUD 서버 구현이
            가능합니다. 또한 요구사항에 따른 DB와 ERD 설계가 가능합니다. 
            <br />
            이를 통해 백엔드 개발자와도 원할한 커뮤니케이션이 가능합니다.
          </p>
        </li>
        <li>
          <p className={DES_STYLE}>
            최근에는 NextJS / Typescript를 기반으로 서비스를 만들어
            배포하였습니다. 
            <br />
            사용자 피드백을 받아서 기능 개선을 하며 꾸준히 깃허브 릴리즈로
            버전관리를 하고 있으며, 이 과정에서 프론트엔드 코드에 대한 학습을
            진행중입니다.
          </p>
        </li>
      </ul>

      <div className="w-full mt-10">
        <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-sky-300/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-white hover:text-black ease-in-out duration-300">
            <span className="text-2xl">
              <CgProfile />
            </span>
            <span>조민택</span>
          </li>
          <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-white/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-white hover:text-black ease-in-out duration-300">
            <span className="text-2xl">
              <MdAccessibilityNew />
            </span>
            <span>1997.07.08</span>
          </li>

          <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-white/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-white hover:text-black ease-in-out duration-300">
            <span className="text-2xl">
              <AiOutlineMail />
            </span>
            <span>mintaek5555@gmail.com</span>
          </li>

          <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-white/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-white hover:text-black ease-in-out duration-300">
            <span className="text-2xl">
              <HiOutlinePhone />
            </span>
            <span>010-9446-3591</span>
          </li>

          <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-white/20 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-white hover:text-black ease-in-out duration-300">
            <span className="text-2xl">
              <FaAddressBook />
            </span>
            <span>서울 성동구</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
