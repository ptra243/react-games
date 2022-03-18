import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
class AppHeader extends Component {

    render() {
        return <Navbar bg="dark" variant="dark">
            <NavbarBrand href="/">
                <img src="logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top" alt="" />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/tetris">Tetris</NavDropdown.Item>
                        <NavDropdown.Item href="/minesweeper">Minesweeper</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline className="float-right">
                    <Container>
                        <Row xs={2} md={4} lg={4}>
                            <Col xs={8} md={8} lg={8}><FormControl type="text" placeholder="Search" /></Col>
                            <Col><Button variant="outline-success">Search</Button></Col>
                        </Row>
                    </Container>
                </Form>
            </Navbar.Collapse>
        </Navbar>;
    }
}
export default AppHeader;