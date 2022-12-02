import React from 'react'
import { Link } from 'react-router-dom'
import '../css/MainCon.scss'

const MainCon = () => {
    return (

        <div className="inner">
            <ul className='main_con'>
                <li> <Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon01.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon02.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon03.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon04.png'} alt="" /></Link></li>
                <li><Link></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon06.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon07.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon08.png'} alt="" /></Link></li>
                <li><Link><img src={process.env.PUBLIC_URL + '/assets/img/MainCon09.png'} alt="" /></Link></li>
            </ul>
        </div>
    )
}

export default MainCon