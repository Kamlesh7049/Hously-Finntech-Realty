import React from 'react'

import Carousel from "react-bootstrap/Carousel";
// import Button from "react-bootstrap/Button";
import ban1 from "../assets/images/banner.jfif";

const Home = () => {
  return (
    <>  
    {/* <h1 align="center">Welcome to Home Page!!!</h1> */}
    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p> */}


<Carousel>
  <Carousel.Item>
    <img src={ban1} width="100%" height="380" className="caro" />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={ban1} width="100%" height="380" className="caro" />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={ban1} width="100%" height="380" className="caro" />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>xxxxxx
    </>
    
  )
}

export default Home;