import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const About = () => {
  return (
    <div>
      <Header />
      <div className="ml-36 mr-36 mt-8 md:px-5 md:py-5 md:flex-row items-center">
        <div className="flex mt-10 mb-10 text-black body-font bg-transparent relative p-10 rounded-[14px] shadow-default hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="mt-4 block">
            <h1 className="block font-bold text-3xl mb-5 font-nanumBold">
              무엇을 할 수 있을까?
            </h1>
            <p className="mx-auto mb-6 font-nanumRegular">
              "훕스토리"는 좋은 사람들과 좋은 프로그램이 함께 합니다. 다양한
              프로젝트 경험을 쌓을 수 있고, 멘토링을 통하여 다양한 기술을 학습할
              수 있습니다. 본인이 원할 시 다대일 멘토링을 통하여 다양한 기술을
              학습할 수 있으며, 동아리원들과 함께 성장할 수 있습니다. 행사 기획,
              디자인 등 다양한 분야에서의 활동과 개발자와의 협업은 다른 곳에선
              경험하지 못할 경험이라고 자신합니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
