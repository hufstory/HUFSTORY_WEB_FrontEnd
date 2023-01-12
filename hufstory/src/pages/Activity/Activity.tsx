import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Activity = () => {
  return (
    <div>
      <Header />
      <div className="w-4/5 mx-auto mt-8 md:px-5 md:py-5 md:flex-row text-center items-center font-nanumRegular">
        <div className="flex flex-col mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1 font-nanumRegular">
            Activity
          </h2>

          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-nanumBold">
            세미나 활동 내역
          </h1>

          <div className="mt-8">
            <p>Hufs missing semester</p>
            <p>HUFSTORY 기술 세미나</p>
            <p>AI Gaming 해커톤</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Activity
