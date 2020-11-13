import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, Row, Col} from 'react-bootstrap'
import { Headset, ChatLeft, Person, Power } from 'react-bootstrap-icons';

export class AppNavbar extends Component {
    render() {
        return (
            <div>
                <Row className='mb-2'>
                    <Col>
                        <Navbar bg="light" expand="lg">
                        <NavbarBrand href="#home">McMakler</NavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#support"><Headset /> Contact Suport</Nav.Link>
                                <Nav.Link href="#chat"> <ChatLeft / ></Nav.Link>
                                <Nav.Link href="#chat"> <Person / ></Nav.Link>
                                <Nav.Link href="#chat"> <Power / ></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar> 
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AppNavbar
