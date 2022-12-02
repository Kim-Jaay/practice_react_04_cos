import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/MainVisual.scss'



const MainVisual = () => {
    return (
        <div className="MainVisual">
            <div className="inner">
                <Slider>
                    <div className="Slide">
                        <img src={process.env.PUBLIC_URL + '/assets/img/MainVisual02.jpg'} alt="" />
                        <div className="slogan">
                            <span>SUSTAINABILITY AT COS</span>
                            <h2>Better Looks Beyond</h2>
                        </div>
                    </div>
                    <div className="Slide">
                        <img src={process.env.PUBLIC_URL + '/assets/img/MainVisual01.jpg'} alt="" />
                        <div className="slogan">
                            <span>SUSTAINABILITY AT COS</span>
                            <h2>Better Looks Beyond</h2>
                        </div>
                    </div>
                    <div className="Slide">
                        <img src={process.env.PUBLIC_URL + '/assets/img/MainVisual03.jpg'} alt="" />
                        <div className="slogan">
                            <span>SUSTAINABILITY AT COS</span>
                            <h2>Better Looks Beyond</h2>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>

    )
}

export default MainVisual