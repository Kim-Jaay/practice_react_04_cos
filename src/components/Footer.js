import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.scss'


const Footer = () => {
    return (
        <footer className='Footer'>

            <div className="top">
                <div className="inner">
                    <div className="top_con">
                        <ul>
                            <li> <Link to='/'>고객서비스</Link></li>
                            <li> <Link to='/'>매장찾기</Link></li>
                            <li> <Link to='/'>배송정보</Link></li>
                            <li> <Link to='/'>반품 및 환불</Link></li>
                            <li> <Link to='/'>결제정보</Link></li>
                        </ul>
                        <ul>
                            <li> <Link to='/'>지속가능성</Link></li>
                            <li> <Link to='/'>협력업체</Link></li>
                            <li> <Link to='/'>다양성 & 포용성</Link></li>
                            <li> <Link to='/'>COS By You</Link></li>
                            <li> <Link to='/'>제품관리</Link></li>
                            <li> <Link to='/'>채용정보</Link></li>
                            <li> <Link to='/'>프레스 문의</Link></li>
                            <li> <Link to='/'>고객문의</Link></li>
                        </ul>
                        <ul>
                            <li><a href="/">Kakaotalk</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Pinterest</a></li>
                            <li><a href="/">Spotify</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bot">
                <div className="inner">
                    <div className="bot_con">
                        <h1>
                            <Link to='/'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/cos_logo.svg'} alt="" />
                            </Link>
                        </h1>
                        <ul>
                            <li> <Link to='/'>이용약관</Link></li>
                            <li> <Link to='/'>개인정보처리방침</Link></li>
                            <li> <Link to='/'>현대백화점 그룹</Link></li>
                        </ul>
                        <ul>
                            <li>주식회사 현대백화점 대표이사 : 김형종 외 2인 서울시 강남구 테헤란로 98길 12</li>
                            <li>사업자등록번호 : 211-87-21455 </li>
                            <li>통신판매업신고번호 : 2010-서울강남-01882</li>
                            <li>개인정보관리 및 청소년보호 책임자 : 회원정보운영관리담당 장근혁</li>
                            <li>고객센터 : 1800-2765</li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer