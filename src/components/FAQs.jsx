import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


const FAQs = () => {
  return (
    <div className='faq-container'>
      <div className="faq-left">
          <h5 style={{color:'#6d1'}}>Support</h5>
          <h1>FAQs</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi voluptas, laudantium a nulla nemo repellendus laboriosam fugit nostrum. Consequatur?</p>
      </div>
      <div className="faq-right">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQs