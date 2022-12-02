import React from 'react'
import NAV from '../data/common'

const MainNav = () => {
    return (
        <ul>
            {
                NAV.map((it, idx) => {
                    return (
                        <li key={idx}>{it.menu}</li>
                    )
                })
            }
        </ul>
    )
}

export default MainNav