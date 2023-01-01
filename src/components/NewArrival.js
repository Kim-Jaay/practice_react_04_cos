import React from 'react'
import '../css/NewArrival.scss'
const NewArrival = () => {
    return (
        <div className='NewArrival'>
            <div className="inner">
                <h2>New Arrival</h2>
                <ul className='new'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_01.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_02.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_03.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_04.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_05.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_06.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_07.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_08.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/assets/img/new_arrive_09.png'} alt="" />
                        <h3>미니 레더 볼링백</h3>
                        <p>225,000 원</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NewArrival