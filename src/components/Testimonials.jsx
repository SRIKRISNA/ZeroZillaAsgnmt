import React from 'react'
import stars from '../assests/stras.png';
import side from '../assests/side1.png';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import './testimonials.scss';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
    designation: 'CEO'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <div className="container-test">
        <Container fluid>
          <img src={stars} alt='stars' style={{ marginBottom: '-30px' }}></img>
          <Carousel controls={false}>
            {
              testimonialsData.map(testimonials => {
                return (
                  <Carousel.Item key={testimonials.id}>
                    <blockquote>
                      <h5>{testimonials.description}</h5>
                      <cite>
                        <span className='name'>{testimonials.name}</span>
                        <span className='designation'>{testimonials.designation}</span>
                      </cite>
                    </blockquote>
                  </Carousel.Item>
                );
              })
            }
          </Carousel>
        </Container>
      </div>
      <div className="img-test">
        
        <img src={side} alt='stars' style={{ maxHeight: '350px' }}></img>
      </div>

    </section>
  )
}

export default Testimonials