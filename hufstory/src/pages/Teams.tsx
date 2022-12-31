import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

//
const Teams = () => {
  return (
    <div>
      <Header />
      <div className="ml-36 mr-36 mt-8 md:px-5 md:py-5 md:flex-row text-center items-center">
        <div className="flex flex-col mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1">
            Teams
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            팀
          </h1>
          <div className="flex flex-wrap lg:flex lg:flex-row place-content-center mt-8">
            <p className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              학회소개
            </p>
            <p className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              학회활동
            </p>
            <p className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              연혁
            </p>
            <p className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              학회장
            </p>
            <p className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              지도교수
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teams
