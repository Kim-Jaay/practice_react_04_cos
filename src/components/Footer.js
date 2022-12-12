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
                            <li><Link>고객서비스</Link></li>
                            <li><Link>매장찾기</Link></li>
                            <li><Link>배송정보</Link></li>
                            <li><Link>반품 및 환불</Link></li>
                            <li><Link>결제정보</Link></li>
                        </ul>
                        <ul>
                            <li><Link>지속가능성</Link></li>
                            <li><Link>협력업체</Link></li>
                            <li><Link>다양성 & 포용성</Link></li>
                            <li><Link>COS By You</Link></li>
                            <li><Link>제품관리</Link></li>
                            <li><Link>채용정보</Link></li>
                            <li><Link>프레스 문의</Link></li>
                            <li><Link>고객문의</Link></li>
                        </ul>
                        <ul>
                            <li><a href="">Kakaotalk</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Pinterest</a></li>
                            <li><a href="">Spotify</a></li>
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
                            <li><Link>gg</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer