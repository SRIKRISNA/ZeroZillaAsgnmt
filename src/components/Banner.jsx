import React from 'react'
import './style.scss';
import { FaBolt, FaThumbsUp } from 'react-icons/fa';
import sideImg from '../assests/side1.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="content">
                <p id='txt-highlight'> <FaThumbsUp style={{ marginRight: '10px' }}/>Lorem ipsum dolor sit amet consectetur ad...</p>
                <h1>Our e-bikes are <span style={{color:'#8d1'}}>crafted to make delivery a breeze</span></h1>
                <p style={{color:'gray', margin:'15px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis exercitationem ea. Vero, qui dicta?</p>
                <div className="btn">
                    <button><FaBolt style={{ marginRight: '10px' }} />Rent Now</button>
                    <button style={{background:'#fff', color:'#000'}}>Enquire Now</button>
                </div>
            </div>
            <div className="sideImg">
                <img src={sideImg} alt='bannerImg' height="500px"></img>
            </div>
        </div>
    )
}

export default Banner