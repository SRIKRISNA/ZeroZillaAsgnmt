import React from 'react'
import side2 from '../assests/side2.jpg';
// import './style.scss';

const Testimonials = () => {
  return (
    <div className='test-container'>
        <div className='test'>
                <div className="sideImg1">
                    <img src={side2} alt='bannerImg' height="350px"></img>
                </div>
                <div className="content12">
                    <h2>Our Journey</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis exercitationem ea. Vero, qui dicta?</p><br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus amet porro. Accusamus blanditiis facilis illo excepturi, autem, in perferendis delectus doloremque, illum ad sequi tempora necessitatibus ipsum a. Adipisci consequuntur alias, expedita dolorum, enim laboriosam corrupti voluptatem eum natus, sapiente commodi ea facilis necessitatibus magni et vitae nemo officiis.</p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio fuga id ut accusamus, optio ex corporis quasi quos fugiat maxime harum vitae totam aliquam.</p>
                </div>
            </div>
    </div>
  )
}

export default Testimonials