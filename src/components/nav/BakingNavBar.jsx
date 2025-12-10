import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { BiBookmarkHeart } from "react-icons/bi";

import logo from '../../assets/logo.png';

export default function BakingNavBar(props) {
    return <Navbar className="beige-nav" variant="light" sticky="top" expand="sm" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                <img
                    alt="Baking Logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Baking Club!
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                    <Nav.Link as={Link} to="/surprise-me">Surprise Me!</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">Favorites <BiBookmarkHeart size={20}/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
