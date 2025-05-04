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
import hygieia from './assets/hygieia.png'


function UserBody() {


    const fitnessCards = [
        {
            cardName: "stats",
            backgroundImage: hygieia,
            bodyImage: statsphoto,
            cardinfo: (
                <>
                    <span>Activity bar: 10%</span>
                    <span>Rank: 52 </span>
                    <span>Hydration bar: 60 </span>
                    <span>Step count: 52 </span>
                </>
            )
        },
        {
            cardName: "assets",
            backgroundImage: hygieia,
            bodyImage: statsphoto,
            cardinfo: (
                <>
                    <span>Accessories: 2</span>
                    <span>Smartwear: 1 </span>
                    <span>Footwear: 3 </span>
                    <span>Active Subscription: 1 </span>
                </>
            )
        },
        {
            cardName: "overview",
            backgroundImage: hygieia,
            bodyImage: statsphoto,
            cardinfo: (
                <>
                    <span>Activity rank: Platinum 717C</span>
                    <span>Diet rank: 52.2541FCC </span>
                    <span>Health status: Healthy.P </span>
                    <span>CC: Level 43.1829BB </span>
                </>
            )
        },
        {
            cardName: "pending",
            backgroundImage: hygieia,
            bodyImage: statsphoto,
            cardinfo: (
                <>
                    <span>Steps: 4557 </span>
                    <span>Purchase: 3 </span>
                    <span>Water cups: 60 </span>
                    <span>Checkups: 2 </span>
                </>
            )
        },
    ];



    let cardName = 'stats'



    return (
        <div>
            <span className='info-dashboard'>
                <span>
                    {fitnessCards.map((cards) => (
                    <div className="card"
                    key={cards.id}
                    style={{
                        backgroundImage: `url(${cards.backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <img src={cards.bodyImage} alt="stats.png" className='img' />
                    <p className='card-title'>
                        {cards.cardName}
                    </p>
                    <div className="textBox">
                        {cards.cardinfo}
                    </div>
                </div>
                    ))}


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


        </div>
    );
}


export default UserBody;