import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Description({ title }: { title: string }) {
  console.log(title);
  return (
    <>
      {title === "shoopy" ? (
        <div className="w-11/12 p-4 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-md sm:text-lg md:text-xl lg-text-2xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            쇼핑몰앱
          </h3>
          <ul className="w-full py-8 px-12 bg-white/60 rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl text-black font-semibold">
            <li className="list-disc ">Firebase 사용하여 Oauth 로그인 구현 </li>
            <li className="list-disc mt-4">
              Firebase RealTime-DataBase 사용하여 상품 CRUD 구현{" "}
            </li>
            <li className="list-disc mt-4">Admin 권한 구현 </li>
            <li className="list-disc mt-4">React-query로 네트워크 상태관리 </li>
          </ul>
          <div className="w-full flex flex-col gap-2 items-center justify-between">
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-4 flex flex-col items-center gap-2">
              <span className="text-xl font-bold">프로젝트 기간</span>
              <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl flex flex-col gap-1">
                <p>2023.04 ~ 2023.04</p>
                <p>개인프로젝트 (1인 / 2주)</p>
              </div>
            </div>
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-2 flex flex-col items-center gap-2">
              <div>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  <span>기술 스택: React, React-Query, Context-API</span>
                </p>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0 mt-2">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  <span>배포 : versel</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : title === "omu" ? (
        <div className="w-11/12 p-4 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-md sm:text-lg md:text-xl lg-text-2xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            오무 - 오늘의 무드
          </h3>
          <ul className="w-full py-8 px-12 bg-white/60 rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl text-black font-semibold">
            <li className="list-disc ">
              Oauth2 구글 로그인과 Redis를 이용한 로그아웃 기능 구현{" "}
            </li>
            <li className="list-disc mt-4">AOP 적용한 예외처리 로직 구현 </li>
            <li className="list-disc mt-4">
              Mood, Tood, Mail 핵심 서비스 CRUD 구현{" "}
            </li>
            <li className="list-disc mt-4">통신 테스트 이슈 대응 </li>
          </ul>
          <div className="w-full flex flex-col gap-2 items-center justify-between">
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-4 flex flex-col items-center gap-2">
              <span className="text-xl font-bold">프로젝트 기간</span>
              <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl flex flex-col gap-1">
                <p>2022.11 ~ 2022.12</p>
                <p>팀프로젝트 (4인 / 4주)</p>
              </div>
            </div>
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-2 flex flex-col items-center gap-2">
              <div>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  <span>기술 스택: Spring boot, Redis, JPA, MySQL</span>
                </p>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0 mt-2">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  <span>배포 : AWS(EC2, RDS)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : title === "foodiary" ? (
        <div className="w-11/12 p-4 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-3xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            푸디어리
          </h3>
          <ul className="w-full py-8 px-12 bg-white/60 rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl text-black font-semibold">
            <li className="list-disc ">
              Oauth2 구글, 네이버 로그인과 Redis를 이용한 로그아웃 기능 구현{" "}
            </li>
            <li className="list-disc mt-4">게시판 CRUD 로직 구현 </li>
            <li className="list-disc mt-4">
              식단 추천 로직 구현 - 스케줄링 기능 적용{" "}
            </li>
            <li className="list-disc mt-4">통신 테스트 이슈 대응 </li>
          </ul>
          <div className="w-full flex flex-col gap-2 items-center justify-between">
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-4 flex flex-col items-center gap-2">
              <span className="text-xl font-bold">프로젝트 기간</span>
              <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl flex flex-col gap-1">
                <p>2022.12 ~ 2022.02</p>
                <p>팀프로젝트 (4인 / 4주)</p>
              </div>
            </div>
            <div className="w-full p-8 bg-white/60 rounded-2xl mt-2 flex flex-col items-center gap-2">
              <div>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  기술 스택: Spring boot, Redis, Mybatis, MySQL
                </p>
                <p className="flex gap-1 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text:xl font-bold shrink-0 mt-2">
                  <div>
                    <BsFillCheckCircleFill />
                  </div>
                  배포 : AWS(beanstalk, RDS), ROUTE53, Git Action(CI/CD)
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
