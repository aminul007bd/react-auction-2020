import React from 'react'
import { Navbar, NavbarBrand, Nav, Row, Col} from 'react-bootstrap'
import { Headset, ChatLeft, Person, Power } from 'react-bootstrap-icons';

export function AppNavbar () {
    return (
        <div>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                    <NavbarBrand href="#home">McMakler</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="font-weight-bold">
                            <Nav.Link href="#support"><Headset /> Contact Suport</Nav.Link>
                            <Nav.Link href="#chat"><ChatLeft /></Nav.Link>
                            <Nav.Link href="#person"><Person /></Nav.Link>
                            <Nav.Link href="#logout"><Power /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar> 
                </Col>
            </Row>
        </div>
    )
}

export default AppNavbar
