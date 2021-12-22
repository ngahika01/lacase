import React from "react";
import { Route } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import SearchBox from "./SearchBox";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container   ">
          <Link className="navbar-brand" to="/">
            <h1 style={{ color: "red", fontWeight: "bold" }}>
              {" "}
              LA CASA DEL LIQOUR
            </h1>{" "}
            {/* <img width="250" src="images/logo.png" alt="#" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item"></li>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onSelect={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer
                  to="/login"
                  className="nav-item d-flex justify-content-center align-center "
                >
                  <Nav.Link>
                    <i className="fas fa-user nav-link"></i>
                    <div className="nav-link" style={{ marginLeft: "-30px" }}>
                      Sign In
                    </div>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer to="/cart" className="nav-item">
                <Nav.Link>
                  <i className="fas fa-shopping-cart nav-link"></i>
                  <sup className="">
                    <div className="supp ">
                      {cartItems && cartItems.length}{" "}
                    </div>
                  </sup>
                </Nav.Link>
              </LinkContainer>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    // <Navbar
    //   className="bg-light  "
    //   expand="lg"
    //   collapseOnSelect
    //   variant="light"
    // >
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand className="text-color">
    //         LA CASA DEL LIQOUR
    //       </Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Route render={({ history }) => <SearchBox history={history} />} />

    //       <Nav className="ml-auto">
    //         <LinkContainer to="/cart">
    //           <Nav.Link>
    //             <i className="fas fa-shopping-cart"></i> Cart
    //             <sup className="">
    //               <div className="supp">{cartItems && cartItems.length} </div>
    //             </sup>
    //           </Nav.Link>
    //         </LinkContainer>
    //         {userInfo ? (
    //           <NavDropdown title={userInfo.name} id="username">
    //             <LinkContainer to="/profile">
    //               <NavDropdown.Item>Profile</NavDropdown.Item>
    //             </LinkContainer>
    //             <NavDropdown.Item onSelect={logoutHandler}>
    //               Logout
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         ) : (
    //           <LinkContainer to="/login">
    //             <Nav.Link>
    //               <i className="fas fa-user"></i> Sign In
    //             </Nav.Link>
    //           </LinkContainer>
    //         )}
    //         {userInfo && userInfo.isAdmin && (
    //           <NavDropdown title="Admin" id="adminmenu">
    //             <LinkContainer to="/admin/userlist">
    //               <NavDropdown.Item>Users</NavDropdown.Item>
    //             </LinkContainer>

    //             <LinkContainer to="/admin/productlist">
    //               <NavDropdown.Item>Products</NavDropdown.Item>
    //             </LinkContainer>

    //             <LinkContainer to="/admin/orderlist">
    //               <NavDropdown.Item>Orders</NavDropdown.Item>
    //             </LinkContainer>
    //           </NavDropdown>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
