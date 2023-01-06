import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import titleLogo from "../../static/images/logo/titleLogo.png"

const RealMain = () => {
  return (
    <div>
      <Header />

      <div className="flex max-w-full h-full ml-36 mx-auto mb-20 font-nanumLight">
        <div className="block mt-8 w-[32rem] mr-[52px]">
          <img className="block h-[200px]" src={titleLogo} alt="title"></img>
          <div className="w-[32rem]">
            <h2 className="font-nanumRegular ml-36 text-base">훕스토리란?</h2>
            <p className="mt-1 mb-6 ml-36">
              개발, 기획&디자인 팀으로 이루어진 교내 학생 자치기구입니다.{" "}
              <br></br>
              개발팀 & 기획 및 디자인 팀으로 구성되어 외대생을 비롯한 대학생들을
              위해 SW 서비스 개발 및 행사 기획을 진행합니다. 자유로운 의사소통과
              팀원 모두의 아이디어를 존중하는 문화를 추구합니다.
            </p>

            <h2 className="font-nanumRegular ml-36 text-base">
              개발(Developer)
            </h2>
            <p className="mt-1 mb-6 ml-36">
              학부 과정에서는 쉽게 경험할 수 없는 다양한 기술을 사용하며{" "}
              <br></br>
              학부생의 실력에 그치지 않는 팀을 지향하고 있습니다.
            </p>

            <h2 className="font-nanumRegular ml-36 text-base">기획 & 디자인</h2>
            <p className="mt-1 mb-6 ml-36">
              주로 컨텐츠, 기획, 디자인을 하며 창의적인 활동을 지향하며 개발
              파트를 맡은 팀원들과 함께 프로젝트를 진행합니다. 개발을 하며
              프로젝트를 진행하며 IT 기획, 프로젝트에 필요한 디자인을 구상하고
              생성하는 역할을 합니다. 기디(기획&디자인)팀은 대외활동, 각종 팁과
              프론트엔드, 기획 스터디까지 다양한 분야에서 학습하게 됩니다.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="947"
            height="985"
            viewBox="0 0 947 985"
          >
            <rect
              id="사각형_4"
              data-name="사각형 4"
              width="947"
              height="985"
              rx="59"
              fill="#95ceff"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RealMain
