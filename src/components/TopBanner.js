import React from 'react'
import { Link } from 'react-router-dom'

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
                                    {it.menu}
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