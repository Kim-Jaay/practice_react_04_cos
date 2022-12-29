import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Trend.scss'
const Trend = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <div className='Trend'>
            <div className="inner_k ">
                <div className="sec01 flex">
                    <img src={process.env.PUBLIC_URL + '/assets/img/jean_01.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/img/jean_02.png'} alt="" />
                    <div className="des">
                        <h2>

                            Straight Leg <br />
                            Non-Stretch Jeans
                        </h2>
                        <span>175,000</span>
                        <p>
                            순수 오가닉 코튼 소재로 만들어진 진입니다. 스트레이트 레그로<br />
                            이루어져 있으며,  허리에 꼭 맞는 핏과 개더 주름을 연출하는 긴 밑단이<br />
                            특징입니다. 옷장 속에 환경을 생각한 리벳 프리 아이템을 더해 보세요.
                        </p>
                    </div>
                </div>
                <div className="jean_slide">
                    <Slider  {...settings} >
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_03.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_04.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_05.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_03.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_04.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/jean_05.png'} alt="" />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Trend