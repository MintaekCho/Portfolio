import React from "react";

export default function Description({ title }: { title: string }) {
  console.log(title);
  return (
    <>
      {title === "shoopy" ? (
        <div className="w-11/12 p-8 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-3xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            쇼핑몰앱(프론트)
          </h3>
          <ul className="w-5/6 py-8 px-12 bg-white/60 rounded-2xl text-xl text-black font-semibold">
            <li className="list-disc ">Firebase 사용하여 Oauth 로그인 구현 </li>
            <li className="list-disc mt-4">
              Firebase RealTime-DataBase 사용하여 상품 CRUD 구현{" "}
            </li>
            <li className="list-disc mt-4">Admin 권한 구현 </li>
            <li className="list-disc mt-4">React-query로 네트워크 상태관리 </li>
          </ul>
        </div>
      ) : title === "omu" ? (
        <div className="w-11/12 p-8 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-3xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            오무 - 오늘의 무(백엔드)
          </h3>
          <ul className="w-5/6 py-8 px-12 bg-white/60 rounded-2xl text-xl text-black font-semibold">
            <li className="list-disc ">Firebase 사용하여 Oauth 로그인 구현 </li>
            <li className="list-disc mt-4">
              Firebase RealTime-DataBase 사용하여 상품 CRUD 구현{" "}
            </li>
            <li className="list-disc mt-4">Admin 권한 구현 </li>
            <li className="list-disc mt-4">React-query로 네트워크 상태관리 </li>
          </ul>
        </div>
      ) : title === "foodiary" ? (
        <div className="w-11/12 p-8 bg-white/10 rounded-3xl flex flex-col items-center">
          <h3 className="text-3xl px-8 py-4 bg-red-400 text-white rounded-2xl mb-10">
            푸디어리(백엔드)
          </h3>
          <ul className="w-5/6 py-8 px-12 bg-white/60 rounded-2xl text-xl text-black font-semibold">
            <li className="list-disc ">Firebase 사용하여 Oauth 로그인 구현 </li>
            <li className="list-disc mt-4">
              Firebase RealTime-DataBase 사용하여 상품 CRUD 구현{" "}
            </li>
            <li className="list-disc mt-4">Admin 권한 구현 </li>
            <li className="list-disc mt-4">React-query로 네트워크 상태관리 </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div>
        
        <div>
            <span>아이콘</span>
        </div>
      </div>
    </>
  );
}
