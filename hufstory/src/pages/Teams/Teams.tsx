import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

//
const Teams = () => {
  return (
    <div>
      <Header />
      <div className="ml-36 mr-36 mt-8 md:px-5 md:py-5 md:flex-row text-center items-center font-nanumRegular">
        <div className="flex flex-col mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1 font-nanumRegular">
            Teams
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-nanumBold">
            2022 - 현재 진행 팀
          </h1>
          <div className="flex flex-wrap lg:flex lg:flex-row place-content-center mt-8">
            <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-lg">
              훕포메이션
            </button>
            <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-400 hover:border-sky-600 text-lg">
              외대 종합 스터디 프로그램
            </button>
            <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-400 hover:border-sky-600 text-lg">
              외대 청원
            </button>
            <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-skyt-400 hover:border-sky-600 text-lg">
              훕스토리 사이트 제작
            </button>
            <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-skyt-400 hover:border-sky-600 text-lg">
              외상청
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams
