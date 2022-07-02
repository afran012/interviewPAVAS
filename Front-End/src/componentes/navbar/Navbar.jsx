import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/action/actionLogin";
import { Container, Nav, Navbar,NavDropdown } from "react-bootstrap"

const NavSection = styled.section` 
    //background-color: #b7c036;
    .colorText{
        //color:#b7c036
    }
`;

const style1 = {
    color: "white"

}

export const NavbarMain = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }









    return (
        <NavSection >

            <Navbar expand="lg" className="sectionNavBar" bg="dark" variant="dark"  >
                <Container fluid >
                    <Navbar.Brand href="/main">
                        Viviendas
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="/main">
                                CRUD
                            </Nav.Link>
                            <NavDropdown
                                title="Usuario"
                                id="navbarScrollingDropdown"
                                style={style1}
                                bg="dark"
                                variant="dark"

                            >

                                <NavDropdown.Item
                                    href="#action4"
                                    onClick={() => handleLogout()}>
                                    Cerrar sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </NavSection>

    )
};