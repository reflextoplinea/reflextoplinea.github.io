'use client' // Required for class components in App Router

import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar sticky={'top'} className="bg-accent text-white z-3 py-3 w-100 mx-auto" expand="lg" style={{zIndex: "100 !important"}}>
            <Container fluid className="mx-auto">
                <Navbar.Brand href="/" className='mx-auto ms-md-3'>
                    <img src="./images/logo_white2048x1548.png" alt="logo" className="img logo-sm text-white mx-auto"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2 ms-md-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mt-2 mt-lg-auto text-center">
                        <NavItem className='mx-auto mx-md-3'>
                            <Nav.Link href='/' className='text-white'>Menu</Nav.Link>
                        </NavItem>
                        <NavItem className='mx-auto mx-md-3'>
                            <Nav.Link href='/about' className='text-white'>Chi Siamo</Nav.Link>
                        </NavItem>
                        <NavItem className='mx-auto mx-md-3'>
                            <Nav.Link href='/contact' className='text-white'>Contatti</Nav.Link>
                        </NavItem>
                        <NavItem className='mx-auto mx-md-3'>
                            <Nav.Link href='/search' className='text-white'>Cerca</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}
