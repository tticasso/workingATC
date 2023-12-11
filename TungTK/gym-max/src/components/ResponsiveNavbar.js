// ResponsiveNavbar.js

import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const ResponsiveNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expanded={expanded}
            expand="lg"
            className={`responsive-navbar ${expanded ? 'full-screen-bg' : ''}`}
        >
            <Navbar.Toggle
                onClick={() => setExpanded(!expanded)}
                aria-controls="responsive-navbar-nav"
                className="custom-toggler-icon"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Pages</Nav.Link>
                    <Nav.Link href="#">Classes</Nav.Link>
                    <Nav.Link href="#">Portfolio</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ResponsiveNavbar;
