import React from 'react'
import { Link } from 'react-router-dom'
import '../css/TopBanner.scss'

const TopBanner = () => {

    const TOPMENU = [
        { id: 1, menu: '검색', link: '/' },
        { id: 2, menu: '로그인', link: '/' },
        { id: 3, menu: '배송국가', link: '/' }
    ]

    return (
        <div className="TopBanner">
            <div className="inner">
                <ul>
                    {
                        TOPMENU.map((it, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={it.link}>{it.menu}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopBanner