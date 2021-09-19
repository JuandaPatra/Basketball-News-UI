import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/all";
import "./home.scss"

const App = () => {
  return (
    <div className="home">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sport-News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:"35%"}}>
              <Nav.Link href="#home">BROWSE</Nav.Link>
              <Nav.Link href="#link">CATEGORY</Nav.Link>
              <Nav.Link href="#link" className="login-btn">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="headline">
        <div className="caption">
          <div className="caption-word">
          <h1>Match of the year</h1>
          {/* <h1>of the year</h1> */}
          <h1>is Coming</h1>
          
          </div>
          <div>
        <Image src="https://images.unsplash.com/photo-1563506644863-444710df1e03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" rounded className="gambar" />
        <div className="word">
          <h1>Match of the year is Coming</h1>
        </div>

          </div>
        </div>
        <div className="top-news">
          <h1 className="head-pop-news">POPULAR NEWS!</h1>
          <div className="pop-news">
            <div className="pop-1">
            <h1>Who will be MVP of the year?</h1>
            <AiOutlineArrowRight className="react-icons" />
            </div>
            <div>
            <h1>Best 3 point in the competition</h1>
            <AiOutlineArrowRight className="react-icons" />
            </div>
            <div>
            <h1>Match Stats and players line-up</h1>
            <AiOutlineArrowRight className="react-icons" />
            </div>
          </div>
        </div>

      </div>
          <h1 style={{textAlign:"center", color:"white"}}>TRENDING NEWS</h1>
        <div className="trending">
          <div className="trend-news">
          <Image src="https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" rounded className="gambar-trend" />
          <div className="trend-caption">
            <h1>Who will be MVP of the year</h1>
            <p>Lorem ipsum dolor sit amet, consectedtur adipisicing elit. Fugiat nobis illo fuga?</p>

          </div>
            
          </div>
          <div className="trend-news">
          <Image src="https://images.unsplash.com/photo-1578354985657-65776ee4ae90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80" rounded className="gambar-trend" />
          <div className="trend-caption">
            <h1>Best 3 point shot in the Competition</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis illo fuga?</p>

          </div>
            
          </div>
          <div className="trend-news">
          <Image src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" rounded className="gambar-trend" />
          <div className="trend-caption">
            <h1>Best 5 Clucth Moments in March</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis illo fuga?</p>

          </div>
            
          </div>
          <div className="trend-news">
          <Image src="https://images.unsplash.com/photo-1613505358783-e5946f6ef4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" rounded className="gambar-trend" />
          <div className="trend-caption">
            <h1>Basketball unwritten rule</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis illo fuga?</p>

          </div>
            
          </div>

        </div>

    </div>
  );
};

export default App;
