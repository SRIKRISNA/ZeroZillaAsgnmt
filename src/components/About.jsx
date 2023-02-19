import React from 'react'
import './style.scss';
import { FaLightbulb, FaBolt, FaThumbsUp } from 'react-icons/fa';
import side2 from '../assests/side2.jpg';
import slide1 from '../assests/slide1.jpg';
import slide2 from '../assests/slide2.jpg';
import slide3 from '../assests/slide3.jpg';
import motor from '../assests/motor.png';
import logos from '../assests/logo.svg';
import Testimonials from './Testimonials';


const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <div className="sideImg">
                    <img src={side2} alt='bannerImg' height="350px"></img>
                </div>
                <div className="content1">
                    <h2>Our Journey</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis exercitationem ea. Vero, qui dicta?</p><br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus amet porro. Accusamus blanditiis facilis illo excepturi, autem, in perferendis delectus doloremque, illum ad sequi tempora necessitatibus ipsum a. Adipisci consequuntur alias, expedita dolorum, enim laboriosam corrupti voluptatem eum natus, sapiente commodi ea facilis necessitatibus magni et vitae nemo officiis.</p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio fuga id ut accusamus, optio ex corporis quasi quos fugiat maxime harum vitae totam aliquam.</p>
                </div>
            </div>
            <div className='vision'>
                <div className="mission">
                    <h2><FaLightbulb style={{ marginRight: '10px' }} />Our Vision</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio fuga id ut accusamus, optio ex corporis quasi quos fugiat maxime harum vitae totam aliquam.</p>
                </div>
                <div className="mission m1">
                    <h2><FaLightbulb style={{ marginRight: '10px' }} />Our Mission</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio fuga id ut accusamus, optio ex corporis quasi quos fugiat maxime harum vitae totam aliquam.</p>
                </div>
            </div>
            <div className='about-info'>
                <div className="content1">
                    <h2>Our Journey Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis exercitationem ea. Vero, qui dicta?</p><br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus amet porro. Accusamus blanditiis facilis illo excepturi, autem, in perferendis delectus doloremque, illum ad sequi tempora necessitatibus ipsum a. Adipisci consequuntur alias, expedita dolorum, enim laboriosam corrupti voluptatem eum natus, sapiente commodi ea facilis necessitatibus magni et vitae nemo officiis.</p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio fuga id ut accusamus, optio ex corporis quasi quos fugiat maxime harum vitae totam aliquam.</p>
                </div>
                <div className="sideImg">
                    <img src={slide2} alt='bannerImg' height="350px"></img>
                </div>
            </div>
            <div className="imgBanner">
                <img src={motor} alt='bannerImg' id='imgbnr'></img>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias sed repellendus ipsam voluptates<br /> porro iste ipsum aspernatur fugit nobis."</p>
                <button><FaBolt style={{ marginRight: '10px', }} />Rent Now</button>

            </div>
            <div className="counters">
                <div className="title-counter">
                    <div className="counter-heading">
                        <h3>Lorem ipsum, adipisicing elit. Ea consectetur similique perferendis! Corporis corrupti obcaecati quasi repellendus neque, nam blanditiis.</h3>
                    </div>
                    <div className="counter-hr">
                        <hr></hr>
                    </div>
                    <br /><br />
                </div>
                <div className="boxes">
                    <div className="box">
                        <h3>Title</h3>
                        <h1>$4800/-</h1>
                        <p>per month</p>
                        <button><FaBolt style={{ marginRight: '10px' }} />Rent Now</button>
                    </div>
                    <div className="box">
                        <h3>Title</h3>
                        <h1>$4800/-</h1>
                        <p>per month</p>
                        <button><FaBolt style={{ marginRight: '10px' }} />Rent Now</button>
                    </div>
                    <div className="box">
                        <h3>Title</h3>
                        <h1>$4800/-</h1>
                        <p>per month</p>
                        <button><FaBolt style={{ marginRight: '10px' }} />Rent Now</button>
                    </div>
                    <div className="box">
                        <h3>Title</h3>
                        <h1>$4800/-</h1>
                        <p>per month</p>
                        <button><FaBolt style={{ marginRight: '10px' }} />Rent Now</button>
                    </div>
                </div>
            </div>
            <div className="clients">
                <div className="title-counter">
                    <span className="client-heading">
                        <h3>Our B2B CUstomers</h3>
                    </span>
                    <div className="client-hr">
                        <hr></hr>
                    </div>
                    <br /><br />
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={logos} alt='logos' height='70px'></img>
                        <img src={logos} alt='logos' height='70px'></img>
                        <img src={logos} alt='logos' height='70px'></img>
                        <img src={logos} alt='logos' height='70px'></img>
                        <img src={logos} alt='logos' height='70px'></img>
                        <img src={logos} alt='logos' height='70px'></img>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About