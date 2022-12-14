import React from 'react'

import { NEW, WOMAN, MAN, GIFT, MAGAZINE } from '../data/common'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <ul className='MainNav'>
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
                <a href="">남성</a>
                <ul className='smenu'>
                    {
                        MAN.map((it, idx) => {
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
    )
}

export default MainNav