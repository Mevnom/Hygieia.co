import React from 'react'
import './UserBody.css';
import statsphoto from './assets/statsphoto.png';
import lightningbolt1 from './assets/lightningbolt1.jpeg';
import lightningbolt2 from './assets/lightningbolt2.jpeg';
import lightningbolt3 from './assets/lightningbolt3.jpeg';
import lightningbolt4 from './assets/lightningbolt4.jpeg';
import lightningbolt5 from './assets/lightningbolt5.jpeg';
import lightningbolt6 from './assets/lightningbolt6.jpeg';
import lightningbolt7 from './assets/lightningbolt7.jpeg';
import lightningbolt8 from './assets/lightningbolt8.jpeg';
import lightningbolt9 from './assets/lightningbolt9.jpeg';



function UserBody() {

    let cardName = 'stats'



    return (
        <div>
            <span className='info-dashboard'>
                <span>
                    <div className="card"
                        style={{
                            backgroundImage: `url(${lightningbolt9})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <img src={statsphoto} alt="stats.png" className='img' />
                        <p className='card-title'>
                            {cardName = 'stats'}
                        </p>
                        <div className="textBox">
                            <span>Activity bar: 10%</span>
                            <span>Rank: 52 </span>
                            <span>Heart rate: 60 </span>
                            <span>Heart rate: 52 </span>
                        </div>
                    </div>

                    <div className="card">
                        <img src={statsphoto} alt="stats.png" className='img' />
                        <p className='card-title'>
                            {cardName = 'overview'}
                        </p>
                        <div className="textBox">
                            <span>Activity bar: 10%</span>
                            <span>Rank: 52 </span>
                            <span>Heart rate: 60 </span>
                            <span>Heart rate: 52 </span>
                        </div>
                    </div>

                </span>
                <span>
                    <div className="card" >
                        <img src={statsphoto} alt="stats.png" className='img' />
                        <p className='card-title'>
                            {cardName = 'assets'}
                        </p>
                        <div className="textBox">
                            <span>Activity bar: &nbsp; 10% <i class="fa-solid fa-battery-full"></i> </span>
                            <span>Rank: 52 </span>
                            <span>Heart rate: 60 </span>
                            <span>Heart rate: 52 </span>
                        </div>
                    </div>

                    <div className="card">
                        <img src={statsphoto} alt="stats.png" className='img' />
                        <p className='card-title'>
                            {cardName = 'Paul'}
                        </p>
                        <div className="textBox">
                            <span>Activity bar: 10%</span>
                            <span>Rank: 52 </span>
                            <span>Heart rate: 60 </span>
                            <span>Heart rate: 52 </span>
                        </div>
                    </div>

                </span>
            </span>

            <img src={lightningbolt1} alt="" />


        </div>
    );
}


export default UserBody;