import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";
// import ReactDOM from react-dom;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const userIcon = <FontAwesomeIcon icon={faUser} style={{color: "#ffddd2",}} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} style={{color: "#ffddd2",}} />;
const cartIcon = <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffddd2",}}/>


export default function NavHeader(){
    return (
        <div>
            <Container fluid className="nav-container" >
            <Navbar expand="lg" className="nav-container">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#custom">Cutsom Orders</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Holidays</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fun
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Casual</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Classy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar className="pressed" href="#home">Pressed</Navbar>
     <div className="icons">
     <p id="user">{userIcon}</p>
     <p id="favorites">{heartIcon}</p>
     <p id="carts">{cartIcon}</p>
     </div>
      </Container>
    </Navbar>
            </Container>
        </div>
    )
}