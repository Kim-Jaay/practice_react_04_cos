import React from 'react'
import '../css/Brand.scss'

const Brand = () => {
    return (
        <div className='Brand'>
            <img src={process.env.PUBLIC_URL + '/assets/img/brand_01.png'} alt="" />
            <div className="inner_k flex">
                <div className='left'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/brand_02.png'} alt="" />
                    <h2>Beyond one season</h2>
                    <p>COS 컬렉션은 우수한 퀄리티와 오래 입을 수 있는 점을 바탕으로 제작됩니다.<br />
                        시즌에 구애받지 않는 타임리스 컬렉션을 위해 순환성 있는 디자인을 고려합니다.<br />
                        환경에 대한 부담을 최소화한 소재부터 제품을 오래도록 활용할 수 있는 방법까지<br />
                        고안하여 컬렉션 제작 과정에 반영합니다.</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/brand_03.png'} alt="" />
            </div>
        </div>
    )
}

export default Brand