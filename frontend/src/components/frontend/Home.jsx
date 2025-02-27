import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <header>
        <div className="signup-menu">
          <div className="bg-dark text-center py-2">
            <span className="text-white">
              Sign up and get 20% off to your first order.{" "}
              <a href="#" className="text-white font-bold">
                Sign Up Now
              </a>
            </span>
          </div>
        </div>
        <Navbar expand="lg" className="px-5 py-3">
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{
                color: "black",
                fontSize: 32,
                fontFamily: "Integral CF Regular",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              SHOP.CO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: "30px" }}
                navbarScroll
              >
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Woman</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Kids</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1">On Sale</Nav.Link>
                <Nav.Link href="#action2">New Arrivals</Nav.Link>
                <Nav.Link href="#action2">Brands</Nav.Link>
              </Nav>
              <div className="search-bar me-auto ms-2 my-2 my-lg-2">
                <FaSearch id="search-icon" />
                <input placeholder="Search for products..." />
              </div>
              <div className="d-flex gap-3 me-auto ms-3">
                <FaShoppingCart id="cart-icon" />
                <FaUser id="user-icon" />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section className="section-1">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-left ms-5 py-5">
              <h1>
                find clothes <br />
                that matches <br />
                your style
              </h1>
              <p className="py-3">
                Browse through our diverse range of meticulously crafted
                garments, designed <br />
                to bring out your individuality and cater to your sense of
                style.
              </p>
              <Button variant="dark">Shop Now</Button>
              <div className="d-flex flex-row gap-5 ">
                <h3>
                  200+
                  <p>International Brands</p>
                </h3>
                <h3>
                  2,000+ <br />
                  <p>High-Quality Products</p>
                </h3>
                <h3>
                  30,000+ <br />
                  <p>Happy Customers</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="logolist">
        <div className="bg-black py-5">
          <div className="d-flex flex-row gap-5 justify-content-center">
            <img src="../images/Versace.png" />
            <img src="../images/Zara.png" />
            <img src="../images/Gucci.png" />
            <img src="../images/Prada.png" />
            <img src="../images/CalvinKlein.png" />
          </div>
        </div>
      </div>
      <section className="section-2">
        <div className="container text-center py-5">
          <h2>NEW ARRIVALS</h2>
          <div className="product card border-0"></div>
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
