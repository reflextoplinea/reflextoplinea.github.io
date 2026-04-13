'use client'

import { Container, Nav, NavItem, Image, Row, Col} from 'react-bootstrap';
import { BsInstagram, BsLink45Deg, BsFacebook, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='bg-accent-light text-white text-center py-3'>
        <Container fluid>
            <Row className='d-flex justify-content-evenly mx-auto w-25 align-items-center mx-5 mb-4 p-0'>
                <Col className='d-flex justify-content-end border border-top-0 border-start-0 border-bottom-0 border-white py-0'>
                    <Nav className='flex-column text-end'>
                        <NavItem>
                            <Nav.Link href="/contacts/" className='text-white'>Indirizzo e Contatti</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href="/contacts/#orario" className='text-white'>Orario</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href="/contacts/#extra" className='text-white'>Info Extra</Nav.Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col className='d-flex justify-content-start align-content-center py-2 text-start'>
                    <Image src='images/logo_white2048x1548.png' alt='Logo' className='img logo-sm text-white'/>
                </Col>
            </Row>

            <span className="h4 text-center my-2">Socials</span>
            <div className="my-3">
                <a target={'_blank'} href={""}><BsInstagram size={30} className="mx-4"/></a>
                <a target={'_blank'} href={""}><BsFacebook size={30} className="mx-4"/></a>
                <a target={'_blank'} href={""}><BsWhatsapp size={30} className="mx-4"/></a>
                <a target={'_blank'} href={""}><BsLink45Deg size={30} className="mx-4"/></a>
            </div>
            <p className="m-0 mt-5 pb-1" style={{ fontSize: "0.8rem"}}>
                This website has been made by <a href="https://marco-skiavone.github.io" className='fw-bold text-decoration-underline'>Marco Schiavone</a>.
            </p>
        </Container>
    </footer>
  );
}
