import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import TopBanner from './TopBanner'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import '../css/Header.scss'

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
                        <MainNav />
                    </nav>
                    <i className={`xi-bars ${on ? 'on' : ''} mbtn `}
                        onClick={() => setOn(!on)}>
                    </i>
                </div>
            </div>
        </header>
    )
}

export default Header