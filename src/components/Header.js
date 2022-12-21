import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import TopBanner from './TopBanner'
import { Link } from 'react-router-dom'
import '../css/Header.scss'
import { NEW, WOMAN, GIFT, MAGAZINE } from '../data/common'


const Header = () => {

    const [on, setOn] = useState(false);

    return (
        <header className='Header'>
            <TopBanner />

            <div className="inner">
                <div className="gnb">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/cos_logo.svg'} alt="" />
                        </Link>
                    </h1>
                    <nav className='navgnb'>
                        <ul className={`MainNav ${on ? 'on' : ''}`}>
                            <li>
                                <a href="">신상품</a>
                                <ul className='smenu'>
                                    {
                                        NEW.map((it, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Link to={it.link}>{it.menu}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li>
                                <a href="">여성</a>
                                <ul className='smenu'>
                                    {
                                        WOMAN.map((it, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Link to={it.link}>{it.menu}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li>
                                <a href="">기프트 컬렉션</a>
                                <ul className='smenu'>
                                    {
                                        GIFT.map((it, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Link to={it.link}>{it.menu}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li>
                                <a href="">매거진</a>
                                <ul className='smenu'>
                                    {
                                        MAGAZINE.map((it, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Link to={it.link}>{it.menu}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <i className={`xi-bars  ${on ? 'on' : ''}`}
                        onClick={() => setOn(!on)}
                    ></i>
                </div>
            </div>
        </header>
    )
}

export default Header