import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const Teams_Gbus = () => {
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
            <Link to="/Teams">
              <button className="text-gray-600 bg-white border-b-2 border-sky-400 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-lg">
                훕포메이션
              </button>
            </Link>
            <Link to="/Teams_Oechul">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-lg">
                외출: 외대생 솔로 탈출 프로젝트
              </button>
            </Link>
            <Link to="/Teams_Gbus">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-lg">
                G버스: 버스 위치 정보 서비스
              </button>
            </Link>
            <Link to="/Teams_Hubigo">
              <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-sky-600 hover:border-sky-600 text-lg">
                HUBIGO: 강의 평가 서비스
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl mb-2">G 버스: 버스 위치 정보 서비스</h1>
            <p>
              G 버스 타이틀
            </p>

            <p>
              G 버스 내용
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams_Gbus
