import axios from "axios";
import React, { useContext, useState } from "react";
import { PublicNavigation, PrivateNavigation } from "../../Navigation";
import { AppContext } from "../../../App";
import "../../../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

export default function Header({ loggedIn }) {
  const { username, addItemToCart, state, setState } = useContext(AppContext);
  const [searchquery, setSearchquery] = useState("");
  console.log(loggedIn, "Hello from Parsials");
  const search = () => {
    const options = {
      method: "GET",
      url: `http://localhost:3001/products/search?name=${searchquery}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setState(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      search();
    }
  };

  return (
    <Navbar variant='dark' expand='lg' className='navbar-style  '>
      <Container fluid>
        <Navbar.Brand href='/' className=' d-flex brand'>
          Free Gaming Zone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto ' style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link
              className='navbar-link home-icon align-items-center'
              href='/'
            >
              <img
                className=''
                src={require("../../../icons/home.png").default}
              />{" "}
            </Nav.Link>
            <Form
              className='d-flex '
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2 search-style'
                aria-label='Search'
                onChange={(e) => {
                  setSearchquery(e.target.value);
                }}
                onKeyPress={handleKeyPress}
              />
              <Button variant='' onClick={search}>
                {" "}
                <img
                  className='search-btn-style'
                  src={require("../../../icons/search.png").default}
                />{" "}
              </Button>
            </Form>
          </Nav>
          {loggedIn ? <PrivateNavigation /> : <PublicNavigation />}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className='navbar navbar-expand-lg navbar-style navbar-light bg-secondary '>
    //   <div className='container-fluid'>
    //     <h5 className=' font-weight-normal brand'>FreeGamingZone</h5>
    //     <button
    //       class='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>

    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
    //         <li className='nav-item'>
    //           <a className='nav-link active' aria-current='page' href='/'>
    //             Nav Link
    //           </a>
    //         </li>
    //         <Link className='nav-link' to={"/"}>
    //           Home
    //           <img
    //             className='home-icon'
    //             src={require("../../../icons/home.png").default}
    //           />
    //         </Link>

    //         {loggedIn ? <PrivateNavigation /> : <PublicNavigation />}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
