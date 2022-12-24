import React, { useState } from 'react';
import TopBanner from './TopBanner'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
import '../css/Header.scss'
import { NEW, WOMAN, GIFT, MAGAZINE } from '../data/common'


const Header = () => {

    const [on, setOn] = useState(false);



    return (
        <header className='Header'>
            <TopBanner />
            <div className="icon">
                <Hamburger
                    toggled={on}
                    toggle={setOn}
                    size={20}
                    className={`${on ? 'on' : ''}`}
                    onClick={() => setOn(!on)}
                />
            </div>

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
                                <a href="/practice_react_04_cos"  >신상품</a>
                                <ul className='smenu'>
                                    {
                                        NEW.map((it, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Link to={it.link} >{it.menu}</Link>
                                                    {/* <a href={/practice_react_04_cos/`${it.link}`}>{it.menu}</a > */}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li>
                                <a href="/practice_react_04_cos">여성</a>
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
                                <a href="/practice_react_04_cos">기프트 컬렉션</a>
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
                                <a href="/practice_react_04_cos">매거진</a>
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

                </div>
            </div >
        </header >
    )
}

export default Header