import React from 'react'
import '../css/knit.scss'


const Knit = () => {
    return (
        <div className='Knit'>
            <div className="inner_k">
                <div className="sec01 flex">
                    <div className='des'>
                        <h2>헤어리 니트<br />
                            울 알파카 스웨터
                        </h2>
                        <span>175,000</span>
                        <p>시즌에 구애받지 않는 클래식 COS 니트웨어.<br />
                            책임 있게 생산한 울과 알파카 혼방 소재로 만들어진 니트 스웨터로,<br />
                            오버사이즈 핏과 낮은 어깨선을 더해 여유로운 실루엣으로 완성되었습니다.<br />
                            이 제품은 울 인증 기준(Responsible Wool Standard)을 준수한 소재로<br />
                            제작되어 동물 및 생산자 커뮤니티를 보호할 수 있습니다.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/knit_01.png'} alt="" />
                </div>

            </div>
            <div className="sec02 flex">
                <img src={process.env.PUBLIC_URL + '/assets/img/knit_02.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/assets/img/knit_03.png'} alt="" />
            </div>
            <div className="sec03 flex">
                <img src={process.env.PUBLIC_URL + '/assets/img/knit_04.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/assets/img/knit_05.png'} alt="" />
            </div>
        </div>
    )
}

export default Knit