import React from 'react'
import NAV from '../data/common'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <ul>
            {
                NAV.map((it, idx) => {
                    return (
                        <li key={idx}>
                            <Link to={it.link}>{it.menu}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MainNav