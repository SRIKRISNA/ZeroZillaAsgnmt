import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sideImg from '../assests/side2.jpg';
import Badge from 'react-bootstrap/Badge';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div className="title-blog">
                <div className="blog-heading">
                    <h1>Blogs </h1>
                </div>
                <div className="blog-hr">
                    <hr></hr>
                </div>
                <br /><br />
            </div>
            <div className="blogs">
                <Card style={{ width: '18rem', marginRight: '50px' }}>
                    <Card.Img variant="top" src={sideImg} />
                    <Card.Body>
                        <Badge bg="dark">
                            Offers & Coupons
                        </Badge><br /><br />
                        <Card.Title>Card Title Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Title>
                        <label>2 days ago   .    110k views</label>
                        <hr></hr>
                        <div className="social">
                            <FaFacebookSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaTwitterSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaInstagram style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaLinkedin style={{ marginRight: '10px', fontSize: '30px' }} />
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginRight: '50px' }}>
                    <Card.Img variant="top" src={sideImg} />
                    <Card.Body>
                        <Badge bg="dark">
                            Offers & Coupons
                        </Badge><br /><br />
                        <Card.Title>Card Title Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Title>
                        <label>2 days ago   .    110k views</label>
                        <hr></hr>
                        <div className="social">
                            <FaFacebookSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaTwitterSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaInstagram style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaLinkedin style={{ marginRight: '10px', fontSize: '30px' }} />
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sideImg} />
                    <Card.Body>
                        <Badge bg="dark">
                            Offers & Coupons
                        </Badge><br /><br />
                        <Card.Title>Card Title Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Title>
                        <label>2 days ago   .    110k views</label>
                        <hr></hr>
                        <div className="social">
                            <FaFacebookSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaTwitterSquare style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaInstagram style={{ marginRight: '10px', fontSize: '30px' }} />
                            <FaLinkedin style={{ marginRight: '10px', fontSize: '30px' }} />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Blogs