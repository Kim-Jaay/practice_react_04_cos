import React from 'react'
import '../css/Woman.scss'
const Woman = () => {
    return (
        <div className='Woman'>
            <div className="inner_k">
                <div className="sec flex">
                    <div className="des">
                        <h2>Oversized Alpaca Blend Sweater</h2>
                        <p>따뜻한 겨울 시즌 룩에 경쾌함을 더해 줄 니트 스웨터입니다.<br />
                            알파카와 울 혼방 소재로 보송보송한 질감을 살려 만들어졌으며,<br />
                            편안한 감각의 오버사이즈 핏으로 이루어져 있습니다.<br />
                            재킷 또는 코트와 함께 매치하여 특별한 컬러 포인트를 더해 보세요.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/color_01.png'} alt="" />
                </div>

                <div className="sec flex">
                    <img src={process.env.PUBLIC_URL + '/assets/img/color_02.png'} alt="" />
                    <div className="des">
                        <h2>Flared Hem Jersey Midi Dress</h2>
                        <p>언제나 함께하기 좋은 클래식한 디자인의 드레스입니다.<br />
                            신축성이 좋은 코튼 혼방 소재로 만들어졌으며, 몸에 꼭 맞는 가슴 부분과<br />
                            섬세한 에이라인 스커트가 우아한 실루엣을 완성합니다.
                        </p>
                    </div>
                </div>

                <div className="sec flex">
                    <div className="des">
                        <h2>Regular Fit Stripe Knit Top</h2>
                        <p>울과 알파카 소재를 혼방하여 가볍고 섬세한 질감을 살린 니트 탑입니다.<br />
                            레귤러 핏으로 이루어져 있으며, 미니멀한 디자인 속 인상적인 스트라이프<br />
                            패턴으로 새로움을 더한 아이템입니다.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/color_03.png'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Woman