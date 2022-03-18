import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
class AppHeader extends Component {

    render() {
        return <Navbar bg="dark" variant="dark">
            <NavbarBrand href="/">
                <img src="../../../public/content/images/logo192.png"
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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>;
    }
}
export default AppHeader;